import { useEffect, useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { StatusBadge, statusLabel } from '../components/StatusBadge';
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
  deliveryRequests: Record<string, { requestedDate: string }>;
  focusOrderId?: string;
}

type OrderFilterTab = 'All' | 'Open' | 'Shipped';

export const ORDERS = [
  { id: 'ord-1', jobName: 'Riverfront Tower — Floor 3', orderNo: 'ORD-10421', description: 'Column Ties — Grid A/B, Floors 3–5', weight: '5,800.1 lbs', status: 'confirmed' as const, scheduledDeliveryDate: 'Jun 12, 2026', shipDate: undefined },
  { id: 'ord-2', jobName: 'Northgate Plaza — Pad B', orderNo: 'ORD-10419', description: 'Beam Cages — Level 3 East Wing', weight: '490.7 lbs', status: 'scheduled' as const, scheduledDeliveryDate: 'Jun 14, 2026', shipDate: undefined },
  { id: 'ord-3', jobName: 'Maple Heights — Block 2', orderNo: 'ORD-10415', description: 'Slab Mat — Bay 7 & 8, Floor 3', weight: '50.6 lbs', status: 'in-transit' as const, scheduledDeliveryDate: 'Jun 16, 2026', shipDate: 'Jun 16, 2026' },
  { id: 'ord-4', jobName: 'Rt. 30 Bridge Rehab', orderNo: 'ORD-10312', description: 'Foundation Rebar — Pier A', weight: '12,400.0 lbs', status: 'action-required' as const, scheduledDeliveryDate: undefined, shipDate: undefined },
  { id: 'ord-5', jobName: 'Westmoreland Mall Garage', orderNo: 'ORD-10318', description: 'Level 2 Welded Wire Mesh', weight: '3,200.0 lbs', status: 'pending' as const, scheduledDeliveryDate: undefined, shipDate: undefined },
  { id: 'ord-6', jobName: 'Allegheny County Jail Annex', orderNo: 'ORD-10329', description: 'Slab Reinforcement — East Wing', weight: '4,750.0 lbs', status: 'confirmed' as const, scheduledDeliveryDate: 'Jun 20, 2026', shipDate: undefined },
  { id: 'ord-7', jobName: 'Eastside Garage', orderNo: 'ORD-10305', description: 'Column Cages — Level 1–3', weight: '8,100.0 lbs', status: 'delivered' as const, scheduledDeliveryDate: 'Jun 4, 2026', shipDate: 'Jun 4, 2026' },
  { id: 'ord-8', jobName: 'Mon Valley Expressway Ph.2', orderNo: 'ORD-10324', description: 'Retaining Wall Bar — Section 4', weight: '15,600.0 lbs', status: 'pending' as const, scheduledDeliveryDate: undefined, shipDate: undefined },
];

export const CLOSED_ORDER_STATUS = 'delivered';
const SHIPPED_ORDER_STATUSES = ['shipped', 'delivered'];

const filterOrders = (orders: typeof ORDERS, tab: OrderFilterTab) => {
  if (tab === 'All') return orders;
  if (tab === 'Open') return orders.filter((o) => !SHIPPED_ORDER_STATUSES.includes(o.status));
  if (tab === 'Shipped') return orders.filter((o) => SHIPPED_ORDER_STATUSES.includes(o.status));
  return orders;
};

function orderDocument(order: (typeof ORDERS)[number]): DocumentSpec {
  return {
    heading: `Order ${order.orderNo}`,
    subheading: order.jobName,
    fields: [
      { label: 'Description', value: order.description },
      { label: 'Weight', value: order.weight },
      { label: 'Status', value: statusLabel(order.status) },
      { label: 'Requested Delivery Date', value: order.scheduledDeliveryDate ?? 'Not yet scheduled' },
      { label: 'Ship Date', value: order.shipDate ?? '—' },
    ],
  };
}

export function OrdersPage({ fabricatorId, selectedJob, onJobChange, onRequestDeliveryDate, deliveryRequests, focusOrderId }: OrdersPageProps) {
  const [activeTab, setActiveTab] = useState<OrderFilterTab>('All');
  const [jobFilter, setJobFilter] = useState('');
  const [orderFilter, setOrderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [previewOrder, setPreviewOrder] = useState<(typeof ORDERS)[number] | null>(
    () => ORDERS.find((o) => o.id === focusOrderId) ?? null
  );
  const [printOpen, setPrintOpen] = useState(false);

  const tabs: OrderFilterTab[] = ['All', 'Open', 'Shipped'];
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
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter job..."
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter order..."
            value={orderFilter}
            onChange={(e) => setOrderFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] outline-none focus:border-[#0d7a6e]"
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
            className="px-4 py-1.5 rounded-full text-[13px] font-medium text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors"
          >
            Enter Order
          </button>
        </SelectionPrintBar>

        {/* Data Table */}
        <div className="md:bg-white md:rounded-lg border-0 md:border md:border-[#e5e7eb] md:shadow-sm md:overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full md:min-w-[1380px] md:table-fixed border-collapse block md:table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="px-4 py-2 w-[36px]" />
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[200px]">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[130px]">Order Number</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[240px]">Description</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[170px]">Requested Delivery Date</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[110px]">Ship Date</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[100px]">Weight</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[130px]">Order Status</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[260px]">Actions</th>
              </tr>
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
            <tbody className="block md:table-row-group">
              {paged.map((row) => (
                <tr
                  key={row.id}
                  className="block md:table-row border border-[#e5e7eb] md:border-0 md:border-b md:border-b-[#f3f4f6] rounded-lg md:rounded-none mb-3 md:mb-0 p-3 md:p-0 bg-white shadow-sm md:shadow-none hover:bg-[#f9fafb] transition-colors"
                >
                  <td className="hidden md:table-cell px-4 py-3 align-top">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="w-4 h-4 accent-[#0d7a6e]"
                    />
                  </td>
                  <td className="flex items-start gap-2 pb-2 md:hidden">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      onChange={() => toggleRow(row.id)}
                      className="w-4 h-4 accent-[#0d7a6e] mt-0.5 shrink-0"
                    />
                    <span className="text-[14px] font-semibold text-[#1a1a1a]">{row.jobName}</span>
                  </td>
                  <td className="hidden md:table-cell px-4 py-3 text-[13px] text-[#1a1a1a] align-top">{row.jobName}</td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Order Number</span>
                    <span className="text-[13px] text-[#1f2937] font-medium">{row.orderNo}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Description</span>
                    <span className="text-[13px] text-[#1f2937] text-right md:text-left">{row.description}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden shrink-0">Requested Delivery Date</span>
                    <div className="flex items-center gap-2 flex-wrap justify-end md:justify-start">
                      <span className="text-[13px] text-[#1a1a1a]">{row.scheduledDeliveryDate ?? '—'}</span>
                      {deliveryRequests[row.id] && (
                        <span
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#fe9a00]"
                          title={`Delivery date change requested: ${deliveryRequests[row.id].requestedDate}`}
                        >
                          <CalendarClock size={12} />
                          Pending
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Ship Date</span>
                    <span className="text-[13px] text-[#1a1a1a]">{row.shipDate ?? '—'}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Weight</span>
                    <span className="text-[13px] text-[#1f2937]">{row.weight}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Status</span>
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="pt-2 md:table-cell md:px-4 md:py-3 md:align-top">
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
                          {deliveryRequests[row.id] ? 'Update Request' : 'Request Delivery Date'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr className="block md:table-row">
                  <td colSpan={9} className="block md:table-cell px-4 py-8 text-center text-[13px] text-[#9ca3af]">No results found.</td>
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
