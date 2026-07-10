import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Pagination } from '../components/Pagination';
import { matchesJob, findJob } from '../data/filters';

interface InvoicesPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  openOnly?: boolean;
}

type InvoiceFilterTab = 'All' | 'Active' | 'Upcoming' | 'Past';
type InvoiceStatus = 'open' | 'overdue' | 'paid';
export type AgingBucket = 'current' | '30' | '60' | '90';

export const INVOICES: {
  id: string;
  invoiceNo: string;
  date: string;
  jobName: string;
  amount: number;
  status: InvoiceStatus;
  daysOutstanding: number;
}[] = [
  { id: 'inv-1', invoiceNo: 'INV-2041', date: 'Jun 1, 2026', jobName: 'Riverfront Tower — Floor 3', amount: 48250, status: 'open', daysOutstanding: 12 },
  { id: 'inv-2', invoiceNo: 'INV-2038', date: 'May 28, 2026', jobName: 'Northgate Plaza — Pad B', amount: 22100, status: 'overdue', daysOutstanding: 45 },
  { id: 'inv-3', invoiceNo: 'INV-2031', date: 'May 15, 2026', jobName: 'Maple Heights — Block 2', amount: 36540, status: 'open', daysOutstanding: 5 },
  { id: 'inv-4', invoiceNo: 'INV-2024', date: 'May 2, 2026', jobName: 'Eastside Garage', amount: 14820, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-5', invoiceNo: 'INV-2019', date: 'Apr 22, 2026', jobName: 'Riverfront Tower — Floor 2', amount: 41300, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-6', invoiceNo: 'INV-2012', date: 'Apr 10, 2026', jobName: 'Rt. 30 Bridge Rehab', amount: 22400, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-7', invoiceNo: 'INV-2044', date: 'Jun 8, 2026', jobName: 'Westmoreland Mall Garage', amount: 9760, status: 'overdue', daysOutstanding: 70 },
  { id: 'inv-8', invoiceNo: 'INV-1988', date: 'Mar 2, 2026', jobName: 'Mon Valley Expressway Ph.2', amount: 15400, status: 'overdue', daysOutstanding: 96 },
];

const STATUS_LABEL: Record<InvoiceStatus, string> = {
  open: 'Open',
  overdue: 'Overdue',
  paid: 'Paid',
};

export function agingBucket(daysOutstanding: number): AgingBucket {
  if (daysOutstanding <= 30) return 'current';
  if (daysOutstanding <= 60) return '30';
  if (daysOutstanding <= 90) return '60';
  return '90';
}

export function formatCurrency(amount: number): string {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const filterInvoices = (invoices: typeof INVOICES, tab: InvoiceFilterTab) => {
  if (tab === 'All') return invoices;
  if (tab === 'Active') return invoices.filter((i) => i.status === 'overdue');
  if (tab === 'Upcoming') return invoices.filter((i) => i.status === 'open');
  if (tab === 'Past') return invoices.filter((i) => i.status === 'paid');
  return invoices;
};

export function InvoicesPage({ fabricatorId, selectedJob, onJobChange, openOnly }: InvoicesPageProps) {
  const [activeTab, setActiveTab] = useState<InvoiceFilterTab>('All');
  const [invoiceFilter, setInvoiceFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [jobFilter, setJobFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const tabs: InvoiceFilterTab[] = ['All', 'Active', 'Upcoming', 'Past'];

  let filtered = filterInvoices(INVOICES, activeTab);
  filtered = filtered.filter((i) => findJob(i.jobName)?.fabricatorId === fabricatorId);
  filtered = filtered.filter((i) => matchesJob(i.jobName, selectedJob));
  if (openOnly) filtered = filtered.filter((i) => i.status !== 'paid');
  if (invoiceFilter) filtered = filtered.filter((i) => i.invoiceNo.toLowerCase().includes(invoiceFilter.toLowerCase()));
  if (dateFilter) filtered = filtered.filter((i) => i.date.toLowerCase().includes(dateFilter.toLowerCase()));
  if (jobFilter) filtered = filtered.filter((i) => i.jobName.toLowerCase().includes(jobFilter.toLowerCase()));
  if (amountFilter) filtered = filtered.filter((i) => formatCurrency(i.amount).includes(amountFilter));
  if (statusFilter) filtered = filtered.filter((i) => STATUS_LABEL[i.status].toLowerCase().includes(statusFilter.toLowerCase()));

  useEffect(() => {
    setPage(1);
  }, [activeTab, invoiceFilter, dateFilter, jobFilter, amountFilter, statusFilter, selectedJob, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Invoices" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="p-8">
        {/* Filter chips */}
        <div className="flex gap-2 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-[14px] border transition-colors ${
                activeTab === tab
                  ? 'bg-[#0d7a6e] border-[#0d7a6e] text-white font-medium'
                  : 'bg-white border-[#d0d0d0] text-[#1a1a1a] hover:border-[#0d7a6e]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[120px]">Invoice #</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[140px]">Date Issued</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[220px]">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[120px]">Amount</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[110px]">Status</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[190px]">Actions</th>
              </tr>
              <tr className="bg-white border-b border-[#e5e7eb]">
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter invoice..."
                    value={invoiceFilter}
                    onChange={(e) => setInvoiceFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter date..."
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter job..."
                    value={jobFilter}
                    onChange={(e) => setJobFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter amount..."
                    value={amountFilter}
                    onChange={(e) => setAmountFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter status..."
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5" />
              </tr>
            </thead>
            <tbody>
              {paged.map((inv) => (
                <tr key={inv.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors">
                  <td className="px-4 py-3 text-[13px] text-[#1f2937] font-medium">{inv.invoiceNo}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{inv.date}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{inv.jobName}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1f2937] font-medium">{formatCurrency(inv.amount)}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{STATUS_LABEL[inv.status]}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      {inv.status !== 'paid' && (
                        <button className="px-3 py-1.5 rounded-full text-[12px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] transition-colors">
                          Pay Now
                        </button>
                      )}
                      <button className="text-[12px] text-[#1a1a1a] underline hover:text-[#0d7a6e] transition-colors">
                        View / Print
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-[13px] text-[#9ca3af]">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <Pagination
            page={safePage}
            pageSize={pageSize}
            totalResults={filtered.length}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </div>
      </div>
    </div>
  );
}
