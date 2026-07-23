import { useEffect, useState } from 'react';
import { StatusBadge, statusLabel } from '../components/StatusBadge';
import { PageHeader } from '../components/PageHeader';
import { Pagination } from '../components/Pagination';
import { SelectionPrintBar } from '../components/SelectionPrintBar';
import { DocumentPreviewDialog, type DocumentSpec } from '../components/DocumentPreviewDialog';
import { matchesJob, findJob } from '../data/filters';

interface ShipmentsPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  focusShipmentId?: string;
}

type FilterTab = 'All' | 'Upcoming' | 'In Progress' | 'Past';

export const SHIPMENTS = [
  { id: 'ship-1', jobName: 'Riverfront Tower — Floor 3', ticketNo: '10421', date: 'Jun 12, 2026', status: 'shipped' as const },
  { id: 'ship-2', jobName: 'Northgate Plaza — Pad B', ticketNo: '—', date: 'Jun 14, 2026', status: 'scheduled' as const },
  { id: 'ship-3', jobName: 'Maple Heights — Block 2', ticketNo: '10402', date: 'Jun 16, 2026', status: 'confirmed' as const },
  { id: 'ship-4', jobName: 'Eastside Garage', ticketNo: '10388', date: 'Jun 4, 2026', status: 'delivered' as const },
  { id: 'ship-5', jobName: 'Riverfront Tower — Floor 2', ticketNo: '10371', date: 'May 28, 2026', status: 'delivered' as const },
  { id: 'ship-6', jobName: 'Mon Valley Expressway Ph.2', ticketNo: '10358', date: 'May 15, 2026', status: 'in-transit' as const },
  { id: 'ship-7', jobName: 'Allegheny County Jail Annex', ticketNo: '10345', date: 'Jul 3, 2026', status: 'confirmed' as const },
  { id: 'ship-8', jobName: 'Westmoreland Mall Garage', ticketNo: '10332', date: 'Jul 10, 2026', status: 'scheduled' as const },
];

export const POSTED_STATUSES = ['confirmed', 'shipped', 'in-transit', 'delivered'];

const filterShipments = (shipments: typeof SHIPMENTS, tab: FilterTab) => {
  if (tab === 'All') return shipments;
  if (tab === 'Upcoming') return shipments.filter((d) => d.status === 'confirmed');
  if (tab === 'In Progress') return shipments.filter((d) => d.status === 'in-transit' || d.status === 'shipped');
  if (tab === 'Past') return shipments.filter((d) => d.status === 'delivered');
  return shipments;
};

function shipmentDocument(shipment: (typeof SHIPMENTS)[number]): DocumentSpec {
  return {
    heading: `Shipping Ticket ${shipment.ticketNo}`,
    subheading: shipment.jobName,
    fields: [
      { label: 'Shipment Date', value: shipment.date },
      { label: 'Status', value: statusLabel(shipment.status) },
    ],
  };
}

export function ShipmentsPage({ fabricatorId, selectedJob, onJobChange, focusShipmentId }: ShipmentsPageProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [jobFilter, setJobFilter] = useState('');
  const [ticketFilter, setTicketFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [previewShipment, setPreviewShipment] = useState<(typeof SHIPMENTS)[number] | null>(
    () => SHIPMENTS.find((s) => s.id === focusShipmentId) ?? null
  );
  const [printOpen, setPrintOpen] = useState(false);

  const tabs: FilterTab[] = ['All', 'Upcoming', 'In Progress', 'Past'];

  // Posted shipments only — this grid never shows unposted (e.g. merely scheduled) shipments.
  let filtered = SHIPMENTS.filter((s) => POSTED_STATUSES.includes(s.status));
  filtered = filterShipments(filtered, activeTab);
  filtered = filtered.filter((d) => findJob(d.jobName)?.fabricatorId === fabricatorId);
  filtered = filtered.filter((d) => matchesJob(d.jobName, selectedJob));
  if (jobFilter) filtered = filtered.filter((d) => d.jobName.toLowerCase().includes(jobFilter.toLowerCase()));
  if (ticketFilter) filtered = filtered.filter((d) => d.ticketNo.includes(ticketFilter));
  if (statusFilter) filtered = filtered.filter((d) => d.status.includes(statusFilter.toLowerCase()));

  useEffect(() => {
    setPage(1);
  }, [activeTab, jobFilter, ticketFilter, statusFilter, selectedJob, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const allSelected = filtered.length > 0 && filtered.every((s) => selected.has(s.id));
  const toggleSelectAll = () => {
    setSelected(allSelected ? new Set() : new Set(filtered.map((s) => s.id)));
  };
  const toggleRow = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedShipments = SHIPMENTS.filter((s) => selected.has(s.id));

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Shipments" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

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
            placeholder="Filter job..."
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
          />
          <input
            className="flex-1 min-w-[140px] max-w-full border border-[#d1d5db] rounded px-3 py-1.5 text-[13px] text-[#374151] outline-none focus:border-[#0d7a6e]"
            placeholder="Filter ticket..."
            value={ticketFilter}
            onChange={(e) => setTicketFilter(e.target.value)}
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
        />

        {/* Data Table */}
        <div className="md:bg-white md:rounded-lg border-0 md:border md:border-[#e5e7eb] md:shadow-sm md:overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full md:min-w-[840px] md:table-fixed border-collapse block md:table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="px-4 py-2 w-[36px]" />
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[260px]">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[180px]">Shipping Ticket Number</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[160px]">Shipment Date</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[120px]">Status</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[80px]">Actions</th>
              </tr>
              <tr className="bg-white border-b border-[#e5e7eb]">
                <td className="px-2 py-1.5" />
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
                    placeholder="Filter ticket..."
                    value={ticketFilter}
                    onChange={(e) => setTicketFilter(e.target.value)}
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
              {paged.map((row) => (
                <tr
                  key={row.id}
                  className="block md:table-row border border-[#e5e7eb] md:border-0 md:border-b md:border-b-[#f3f4f6] rounded-lg md:rounded-none mb-3 md:mb-0 p-3 md:p-0 bg-white shadow-sm md:shadow-none"
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
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Ticket Number</span>
                    <span className="text-[13px] text-[#1f2937] font-medium">{row.ticketNo}</span>
                  </td>
                  <td className="flex justify-between gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Shipment Date</span>
                    <span className="text-[13px] text-[#1a1a1a]">{row.date}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Status</span>
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="pt-2 md:table-cell md:px-4 md:py-3 md:align-top">
                    <button
                      onClick={() => setPreviewShipment(row)}
                      className="text-[12px] text-[#1a1a1a] underline hover:text-[#0d7a6e] transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr className="block md:table-row">
                  <td colSpan={6} className="block md:table-cell px-4 py-8 text-center text-[13px] text-[#9ca3af]">No results found.</td>
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

      {previewShipment && (
        <DocumentPreviewDialog
          open={!!previewShipment}
          onOpenChange={(open) => !open && setPreviewShipment(null)}
          title={`Shipping Ticket ${previewShipment.ticketNo}`}
          documents={[shipmentDocument(previewShipment)]}
        />
      )}

      <DocumentPreviewDialog
        open={printOpen}
        onOpenChange={setPrintOpen}
        title={`Print Shipping Tickets (${selectedShipments.length})`}
        documents={selectedShipments.map(shipmentDocument)}
      />
    </div>
  );
}
