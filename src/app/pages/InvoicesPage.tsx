import { useEffect, useState } from 'react';
import { StatusBadge, statusLabel } from '../components/StatusBadge';
import { PageHeader } from '../components/PageHeader';
import { Pagination } from '../components/Pagination';
import { SelectionPrintBar } from '../components/SelectionPrintBar';
import { DocumentPreviewDialog, type DocumentSpec } from '../components/DocumentPreviewDialog';
import { matchesJob, findJob } from '../data/filters';

interface InvoicesPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  openOnly?: boolean;
  focusInvoiceId?: string;
}

type InvoiceFilterTab = 'All' | 'Open' | 'Closed';
type InvoiceStatus = 'open' | 'overdue' | 'paid';
export type AgingBucket = 'current' | '30' | '60' | '90';

export const INVOICES: {
  id: string;
  invoiceNo: string;
  date: string;
  jobName: string;
  amount: number;
  amountOpen: number;
  status: InvoiceStatus;
  daysOutstanding: number;
}[] = [
  { id: 'inv-1', invoiceNo: 'INV-2041', date: 'Jun 1, 2026', jobName: 'Riverfront Tower — Floor 3', amount: 48250, amountOpen: 48250, status: 'open', daysOutstanding: 12 },
  { id: 'inv-2', invoiceNo: 'INV-2038', date: 'May 28, 2026', jobName: 'Northgate Plaza — Pad B', amount: 22100, amountOpen: 22100, status: 'overdue', daysOutstanding: 45 },
  { id: 'inv-3', invoiceNo: 'INV-2031', date: 'May 15, 2026', jobName: 'Maple Heights — Block 2', amount: 36540, amountOpen: 20000, status: 'open', daysOutstanding: 5 },
  { id: 'inv-4', invoiceNo: 'INV-2024', date: 'May 2, 2026', jobName: 'Eastside Garage', amount: 14820, amountOpen: 0, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-5', invoiceNo: 'INV-2019', date: 'Apr 22, 2026', jobName: 'Riverfront Tower — Floor 2', amount: 41300, amountOpen: 0, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-6', invoiceNo: 'INV-2012', date: 'Apr 10, 2026', jobName: 'Rt. 30 Bridge Rehab', amount: 22400, amountOpen: 0, status: 'paid', daysOutstanding: 0 },
  { id: 'inv-7', invoiceNo: 'INV-2044', date: 'Jun 8, 2026', jobName: 'Westmoreland Mall Garage', amount: 9760, amountOpen: 9760, status: 'overdue', daysOutstanding: 70 },
  { id: 'inv-8', invoiceNo: 'INV-1988', date: 'Mar 2, 2026', jobName: 'Mon Valley Expressway Ph.2', amount: 15400, amountOpen: 10000, status: 'overdue', daysOutstanding: 96 },
];

export function agingBucket(daysOutstanding: number): AgingBucket {
  if (daysOutstanding <= 30) return 'current';
  if (daysOutstanding <= 60) return '30';
  if (daysOutstanding <= 90) return '60';
  return '90';
}

export function formatCurrency(amount: number): string {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function invoiceDocument(invoice: (typeof INVOICES)[number]): DocumentSpec {
  return {
    heading: `Invoice ${invoice.invoiceNo}`,
    subheading: invoice.jobName,
    fields: [
      { label: 'Invoice Date', value: invoice.date },
      { label: 'Invoice Amount', value: formatCurrency(invoice.amount) },
      { label: 'Amount Open', value: formatCurrency(invoice.amountOpen) },
      { label: 'Status', value: statusLabel(invoice.status) },
    ],
  };
}

const filterInvoices = (invoices: typeof INVOICES, tab: InvoiceFilterTab) => {
  if (tab === 'All') return invoices;
  if (tab === 'Open') return invoices.filter((i) => i.status !== 'paid');
  if (tab === 'Closed') return invoices.filter((i) => i.status === 'paid');
  return invoices;
};

export function InvoicesPage({ fabricatorId, selectedJob, onJobChange, openOnly, focusInvoiceId }: InvoicesPageProps) {
  const [activeTab, setActiveTab] = useState<InvoiceFilterTab>('All');
  const [invoiceFilter, setInvoiceFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [jobFilter, setJobFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [previewInvoice, setPreviewInvoice] = useState<(typeof INVOICES)[number] | null>(
    () => INVOICES.find((i) => i.id === focusInvoiceId) ?? null
  );
  const [printOpen, setPrintOpen] = useState(false);

  const tabs: InvoiceFilterTab[] = ['All', 'Open', 'Closed'];

  let filtered = filterInvoices(INVOICES, activeTab);
  filtered = filtered.filter((i) => findJob(i.jobName)?.fabricatorId === fabricatorId);
  filtered = filtered.filter((i) => matchesJob(i.jobName, selectedJob));
  if (openOnly) filtered = filtered.filter((i) => i.status !== 'paid');
  if (invoiceFilter) filtered = filtered.filter((i) => i.invoiceNo.toLowerCase().includes(invoiceFilter.toLowerCase()));
  if (dateFilter) filtered = filtered.filter((i) => i.date.toLowerCase().includes(dateFilter.toLowerCase()));
  if (jobFilter) filtered = filtered.filter((i) => i.jobName.toLowerCase().includes(jobFilter.toLowerCase()));
  if (amountFilter) filtered = filtered.filter((i) => formatCurrency(i.amount).includes(amountFilter));
  if (statusFilter) filtered = filtered.filter((i) => i.status.includes(statusFilter.toLowerCase()));

  useEffect(() => {
    setPage(1);
  }, [activeTab, invoiceFilter, dateFilter, jobFilter, amountFilter, statusFilter, selectedJob, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const allSelected = filtered.length > 0 && filtered.every((i) => selected.has(i.id));
  const toggleSelectAll = () => {
    setSelected(allSelected ? new Set() : new Set(filtered.map((i) => i.id)));
  };
  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedInvoices = INVOICES.filter((i) => selected.has(i.id));
  const selectedUnpaidCount = selectedInvoices.filter((i) => i.status !== 'paid').length;

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Invoices" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="p-4 sm:p-8">
        {/* Filter chips */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-[14px] border transition-colors ${
                activeTab === tab
                  ? 'bg-[#0d7a6e] border-[#0d7a6e] text-white font-medium'
                  : 'bg-white border-[#d0d0d0] text-[#1a1a1a] hover:border-[#0d7a6e]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters (mobile — desktop filters live in the table header) */}
        <div className="flex flex-wrap gap-2 mb-4 md:hidden">
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter invoice..."
            value={invoiceFilter}
            onChange={(e) => setInvoiceFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter date..."
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter job..."
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter amount..."
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter status..."
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
        </div>

        <SelectionPrintBar
          selectedCount={selected.size}
          totalCount={filtered.length}
          allSelected={allSelected}
          onToggleSelectAll={toggleSelectAll}
          onPrint={() => setPrintOpen(true)}
        >
          <button
            onClick={() => {}}
            disabled={selectedUnpaidCount === 0}
            className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Pay{selectedUnpaidCount > 0 ? ` (${selectedUnpaidCount})` : ''}
          </button>
        </SelectionPrintBar>

        {/* Data Table */}
        <div className="md:bg-white md:rounded-lg border-0 md:border md:border-[#e5e7eb] md:shadow-sm md:overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full md:min-w-[970px] md:table-fixed border-collapse block md:table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="px-4 py-2 w-[36px]" />
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[130px]">Invoice Number</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[130px]">Invoice Date</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[220px]">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[120px]">Invoice Amount</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[120px]">Amount Open</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[110px]">Status</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[100px]">Actions</th>
              </tr>
              <tr className="bg-white border-b border-[#e5e7eb]">
                <td className="px-2 py-1.5" />
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
                <td className="px-2 py-1.5" />
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
            <tbody className="block md:table-row-group">
              {paged.map((inv) => (
                <tr
                  key={inv.id}
                  className="block md:table-row border border-[#e5e7eb] md:border-0 md:border-b md:border-b-[#f3f4f6] rounded-lg md:rounded-none mb-3 md:mb-0 p-3 md:p-0 bg-white shadow-sm md:shadow-none hover:bg-[#f9fafb] transition-colors"
                >
                  <td className="hidden md:table-cell px-4 py-3 align-top">
                    <input
                      type="checkbox"
                      checked={selected.has(inv.id)}
                      onChange={() => toggleRow(inv.id)}
                      className="w-4 h-4 accent-[#0d7a6e]"
                    />
                  </td>
                  <td className="flex items-start gap-2 pb-2 md:hidden">
                    <input
                      type="checkbox"
                      checked={selected.has(inv.id)}
                      onChange={() => toggleRow(inv.id)}
                      className="w-4 h-4 accent-[#0d7a6e] mt-0.5 shrink-0"
                    />
                    <span className="text-[14px] font-semibold text-[#1a1a1a]">{inv.invoiceNo}</span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-[13px] text-[#1f2937] font-medium align-top">{inv.invoiceNo}</td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Invoice Date</span>
                    <span className="text-[13px] text-[#1a1a1a]">{inv.date}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Job Name</span>
                    <span className="text-[13px] text-[#1a1a1a] text-right md:text-left">{inv.jobName}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Invoice Amount</span>
                    <span className="text-[13px] text-[#1f2937] font-medium">{formatCurrency(inv.amount)}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Amount Open</span>
                    <span className="text-[13px] text-[#1f2937]">{formatCurrency(inv.amountOpen)}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Status</span>
                    <StatusBadge status={inv.status} />
                  </td>
                  <td className="pt-2 md:table-cell md:px-4 md:py-3 md:align-top">
                    <button
                      onClick={() => setPreviewInvoice(inv)}
                      className="text-[12px] text-[#1a1a1a] underline hover:text-[#0d7a6e] transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr className="block md:table-row">
                  <td colSpan={8} className="block md:table-cell px-4 py-8 text-center text-[13px] text-[#9ca3af]">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
          </div>

          <Pagination
            page={safePage}
            pageSize={pageSize}
            totalResults={filtered.length}
            onPageChange={setPage}
            onPageSizeChange={setPageSize}
          />
        </div>
      </div>

      {previewInvoice && (
        <DocumentPreviewDialog
          open={!!previewInvoice}
          onOpenChange={(open) => !open && setPreviewInvoice(null)}
          title={`Invoice ${previewInvoice.invoiceNo}`}
          documents={[invoiceDocument(previewInvoice)]}
        />
      )}

      <DocumentPreviewDialog
        open={printOpen}
        onOpenChange={setPrintOpen}
        title={`Print Invoices (${selectedInvoices.length})`}
        documents={selectedInvoices.map(invoiceDocument)}
      />
    </div>
  );
}
