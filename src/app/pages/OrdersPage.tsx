import { useEffect, useState } from 'react';
import { StatusBadge } from '../components/StatusBadge';
import { PageHeader } from '../components/PageHeader';
import { Pagination } from '../components/Pagination';
import { SelectionPrintBar } from '../components/SelectionPrintBar';
import { DocumentPreviewDialog, type DocumentSpec } from '../components/DocumentPreviewDialog';
import { matchesJob, findJob } from '../data/filters';

interface OrdersPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  onRequestDeliveryDate: (order: (typeof ORDERS)[number]) => void;
}

type OrderFilterTab = 'All' | 'Active' | 'Upcoming' | 'Past';

export const ORDERS = [
  { id: 'ord-1', jobName: 'Riverfront Tower — Floor 3', orderNo: 'ORD-10421', description: 'Column Ties — Grid A/B, Floors 3–5', datePlaced: 'May 15, 2026', weight: '5,800.1 lbs', status: 'confirmed' as const, scheduledDeliveryDate: 'Jun 12, 2026' },
  { id: 'ord-2', jobName: 'Northgate Plaza — Pad B', orderNo: 'ORD-10419', description: 'Beam Cages — Level 3 East Wing', datePlaced: 'May 18, 2026', weight: '490.7 lbs', status: 'scheduled' as const, scheduledDeliveryDate: 'Jun 14, 2026' },
  { id: 'ord-3', jobName: 'Maple Heights — Block 2', orderNo: 'ORD-10415', description: 'Slab Mat — Bay 7 & 8, Floor 3', datePlaced: 'May 20, 2026', weight: '50.6 lbs', status: 'in-transit' as const, scheduledDeliveryDate: 'Jun 16, 2026' },
  { id: 'ord-4', jobName: 'Rt. 30 Bridge Rehab', orderNo: 'ORD-10312', description: 'Foundation Rebar — Pier A', datePlaced: 'Apr 30, 2026', weight: '12,400.0 lbs', status: 'action-required' as const, scheduledDeliveryDate: undefined },
  { id: 'ord-5', jobName: 'Westmoreland Mall Garage', orderNo: 'ORD-10318', description: 'Level 2 Welded Wire Mesh', datePlaced: 'Apr 25, 2026', weight: '3,200.0 lbs', status: 'pending' as const, scheduledDeliveryDate: undefined },
  { id: 'ord-6', jobName: 'Allegheny County Jail Annex', orderNo: 'ORD-10329', description: 'Slab Reinforcement — East Wing', datePlaced: 'Jun 1, 2026', weight: '4,750.0 lbs', status: 'confirmed' as const, scheduledDeliveryDate: 'Jun 20, 2026' },
  { id: 'ord-7', jobName: 'Eastside Garage', orderNo: 'ORD-10305', description: 'Column Cages — Level 1–3', datePlaced: 'Mar 12, 2026', weight: '8,100.0 lbs', status: 'delivered' as const, scheduledDeliveryDate: 'Jun 4, 2026' },
  { id: 'ord-8', jobName: 'Mon Valley Expressway Ph.2', orderNo: 'ORD-10324', description: 'Retaining Wall Bar — Section 4', datePlaced: 'May 28, 2026', weight: '15,600.0 lbs', status: 'pending' as const, scheduledDeliveryDate: undefined },
];

export const CLOSED_ORDER_STATUS = 'delivered';

const filterOrders = (orders: typeof ORDERS, tab: OrderFilterTab) => {
  if (tab === 'All') return orders;
  if (tab === 'Active') return orders.filter(o => ['confirmed', 'in-transit', 'shipped', 'action-required'].includes(o.status));
  if (tab === 'Upcoming') return orders.filter(o => ['scheduled', 'pending'].includes(o.status));
  if (tab === 'Past') return orders.filter(o => o.status === 'delivered');
  return orders;
};

function orderDocument(order: (typeof ORDERS)[number]): DocumentSpec {
  return {
    heading: `Order ${order.orderNo}`,
    subheading: order.jobName,
    fields: [
      { label: 'Description', value: order.description },
      { label: 'Date Placed', value: order.datePlaced },
      { label: 'Weight', value: order.weight },
      { label: 'Status', value: order.status },
      { label: 'Scheduled Delivery', value: order.scheduledDeliveryDate ?? 'Not yet scheduled' },
    ],
  };
}

export function OrdersPage({ fabricatorId, selectedJob, onJobChange, onRequestDeliveryDate }: OrdersPageProps) {
  const [activeTab, setActiveTab] = useState<OrderFilterTab>('All');
  const [jobFilter, setJobFilter] = useState('');
  const [orderFilter, setOrderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [previewOrder, setPreviewOrder] = useState<(typeof ORDERS)[number] | null>(null);
  const [printOpen, setPrintOpen] = useState(false);

  const tabs: OrderFilterTab[] = ['All', 'Active', 'Upcoming', 'Past'];
  let filtered = filterOrders(ORDERS, activeTab);
  filtered = filtered.filter((o) => findJob(o.jobName)?.fabricatorId === fabricatorId);
  filtered = filtered.filter((o) => matchesJob(o.jobName, selectedJob));
  if (jobFilter) filtered = filtered.filter(o => o.jobName.toLowerCase().includes(jobFilter.toLowerCase()));
  if (orderFilter) filtered = filtered.filter(o => o.orderNo.toLowerCase().includes(orderFilter.toLowerCase()));
  if (statusFilter) filtered = filtered.filter(o => o.status.includes(statusFilter.toLowerCase()));

  useEffect(() => {
    setPage(1);
  }, [activeTab, jobFilter, orderFilter, statusFilter, selectedJob, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const allSelected = filtered.length > 0 && filtered.every((o) => selected.has(o.id));
  const toggleSelectAll = () => {
    setSelected((prev) => {
      if (allSelected) return new Set();
      return new Set(filtered.map((o) => o.id));
    });
  };
  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedOrders = ORDERS.filter((o) => selected.has(o.id));

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Orders" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

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

        <SelectionPrintBar
          selectedCount={selected.size}
          totalCount={filtered.length}
          allSelected={allSelected}
          onToggleSelectAll={toggleSelectAll}
          onPrint={() => setPrintOpen(true)}
        >
          <button
            onClick={() => {}}
            className="px-4 py-1.5 rounded-full text-[13px] font-medium text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors"
          >
            Enter Order
          </button>
        </SelectionPrintBar>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="px-4 py-2 w-[36px]" />
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[200px]">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[110px]">Order #</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2">Description</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[110px]">Date Placed</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[100px]">Weight</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[130px]">Order Status</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[260px]">Actions</th>
              </tr>
              {/* Filter row */}
              <tr className="bg-white border-b border-[#e5e7eb]">
                <td className="px-2 py-1.5" />
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter job..."
                    value={jobFilter}
                    onChange={(e) => setJobFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter order..."
                    value={orderFilter}
                    onChange={(e) => setOrderFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5" />
                <td className="px-2 py-1.5" />
                <td className="px-2 py-1.5" />
                <td className="px-2 py-1.5">
                  <input
                    className="w-full border border-[#d1d5db] rounded px-2 py-1 text-[12px] outline-none focus:border-[#0d7a6e]"
                    placeholder="Filter status..."
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  />
                </td>
                <td className="px-2 py-1.5" />
              </tr>
            </thead>
            <tbody>
              {paged.map((row) => (
                <tr key={row.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="w-4 h-4 accent-[#0d7a6e]"
                    />
                  </td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{row.jobName}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1f2937] font-medium">{row.orderNo}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1f2937]">{row.description}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{row.datePlaced}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1f2937]">{row.weight}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <button
                        onClick={() => setPreviewOrder(row)}
                        className="text-[12px] text-[#1a1a1a] underline hover:text-[#0d7a6e] transition-colors"
                      >
                        View
                      </button>
                      <button
                        onClick={() => {}}
                        className="text-[12px] text-[#1a1a1a] underline hover:text-[#0d7a6e] transition-colors"
                      >
                        Reorder
                      </button>
                      {row.status !== CLOSED_ORDER_STATUS && (
                        <button
                          onClick={() => onRequestDeliveryDate(row)}
                          className="text-[12px] text-[#0d7a6e] underline hover:text-[#0b6b60] transition-colors font-medium"
                        >
                          Request Delivery Date
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-[13px] text-[#9ca3af]">No results found.</td>
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

      {previewOrder && (
        <DocumentPreviewDialog
          open={!!previewOrder}
          onOpenChange={(open) => !open && setPreviewOrder(null)}
          title={`Order ${previewOrder.orderNo}`}
          documents={[orderDocument(previewOrder)]}
        />
      )}

      <DocumentPreviewDialog
        open={printOpen}
        onOpenChange={setPrintOpen}
        title={`Print Orders (${selectedOrders.length})`}
        documents={selectedOrders.map(orderDocument)}
      />
    </div>
  );
}
