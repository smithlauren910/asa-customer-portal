import { TileCard } from '../components/TileCard';
import { StatusBadge } from '../components/StatusBadge';
import { PageHeader } from '../components/PageHeader';
import { matchesJob, jobsForFabricator, findJob } from '../data/filters';
import { ORDERS } from './OrdersPage';
import { SHIPMENTS, POSTED_STATUSES } from './ShipmentsPage';
import { INVOICES, agingBucket, formatCurrency, type AgingBucket } from './InvoicesPage';
import { THREADS } from '../data/messages';
import type { Fabricator } from '../data/fabricators';

interface HomePageProps {
  fabricator: Fabricator;
  selectedJob: string;
  onJobChange: (job: string) => void;
  onOpenJobs: () => void;
  onOpenOrders: () => void;
  onOpenShipments: () => void;
  onOpenInvoices: () => void;
  onOpenMessages: () => void;
}

const SCHEDULE = [
  {
    id: 'sched-1',
    date: 'Mon, Jun 9',
    status: 'action-required',
    orderNo: 'PGH26-0312',
    title: 'Rt. 30 Bridge Rehab — Foundation Rebar',
    subtitle: 'Fabricated Rebar · 340 items · aSa Steel Fabricators, Murrysville PA',
    alert: 'Revised structural drawings required before release. Please upload updated sheet S-104 from your engineer of record.',
    job: 'Rt. 30 Bridge Rehab',
  },
  {
    id: 'sched-2',
    date: 'Mon, Jun 9',
    status: 'in-transit',
    orderNo: 'PGH26-0313',
    title: 'Rt. 30 Bridge Rehab — Pier Cap Stirrups',
    subtitle: 'Stirrups & Ties · 112 items · aSa Steel Fabricators, Murrysville PA',
    alert: null,
    job: 'Rt. 30 Bridge Rehab',
  },
  {
    id: 'sched-3',
    date: 'Sun, Jun 14',
    status: 'confirmed',
    orderNo: 'PGH26-0319',
    title: 'Westmoreland Mall Garage — Column Cages',
    subtitle: 'Fabricated Rebar · 48 items · aSa Steel Fabricators, Murrysville PA',
    alert: null,
    job: 'Westmoreland Mall Garage',
  },
  {
    id: 'sched-4',
    date: 'Sat, Jun 27',
    status: 'action-required',
    orderNo: 'PGH26-0318',
    title: 'Westmoreland Mall Garage — Level 2 Mesh',
    subtitle: 'Welded Wire Mesh · 80 items · aSa Steel Fabricators, Murrysville PA',
    alert: 'Pour schedule moved up. Confirm revised delivery window by Jun 12 or order will be rescheduled.',
    job: 'Westmoreland Mall Garage',
  },
];

const AGING_LABELS: { key: AgingBucket; label: string }[] = [
  { key: 'current', label: 'Current' },
  { key: '30', label: '30' },
  { key: '60', label: '60' },
  { key: '90', label: '90+' },
];

export function HomePage({
  fabricator,
  selectedJob,
  onJobChange,
  onOpenJobs,
  onOpenOrders,
  onOpenShipments,
  onOpenInvoices,
  onOpenMessages,
}: HomePageProps) {
  const inScope = (jobName: string) => findJob(jobName)?.fabricatorId === fabricator.id && matchesJob(jobName, selectedJob);

  // Jobs
  const jobs = jobsForFabricator(fabricator.id).filter((j) => selectedJob === 'All Jobs' || j.name === selectedJob);
  const openJobs = jobs.filter((j) => j.status === 'open').length;

  // Orders
  const scopedOrders = ORDERS.filter((o) => inScope(o.jobName));
  const closedOrders = scopedOrders.filter((o) => o.status === 'delivered').length;
  const openOrders = scopedOrders.length - closedOrders;

  // Shipments — posted only
  const scopedShipments = SHIPMENTS.filter((s) => inScope(s.jobName));
  const postedShipments = scopedShipments.filter((s) => POSTED_STATUSES.includes(s.status)).length;

  // Invoices — aging buckets, unpaid only
  const scopedInvoices = INVOICES.filter((i) => inScope(i.jobName) && i.status !== 'paid');
  const buckets: Record<AgingBucket, number> = { current: 0, '30': 0, '60': 0, '90': 0 };
  scopedInvoices.forEach((i) => {
    buckets[agingBucket(i.daysOutstanding)] += i.amount;
  });

  // Messages
  const scopedThreads = THREADS.filter((t) => inScope(t.jobName));
  const unreadMessages = scopedThreads.filter((t) => t.unread).length;

  // Schedule feed
  const scopedSchedule = SCHEDULE.filter((s) => inScope(s.job));
  const actionSchedule = scopedSchedule.filter((s) => s.status === 'action-required');
  const nonActionSchedule = scopedSchedule.filter((s) => s.status !== 'action-required');
  const sortedSchedule = [...actionSchedule, ...nonActionSchedule];
  const groupedByDate: Record<string, typeof SCHEDULE> = {};
  sortedSchedule.forEach((item) => {
    if (!groupedByDate[item.date]) groupedByDate[item.date] = [];
    groupedByDate[item.date].push(item);
  });

  const activeJob = selectedJob !== 'All Jobs' ? findJob(selectedJob) : undefined;
  const title = activeJob ? `${activeJob.fabricatorJobNumber} · ${activeJob.name}` : 'Dashboard';

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title={title} fabricatorId={fabricator.id} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="px-8 py-6 flex flex-col gap-6">
        {/* Tiles Row */}
        <div className="flex gap-4">
          <TileCard title="Jobs" onClick={onOpenJobs}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">
              {openJobs} <span className="text-[16px] font-normal text-[#6b7280]">open of {jobs.length}</span>
            </p>
            <p className="text-[12px] text-[#6b7280] mt-1">Jobs in scope</p>
          </TileCard>

          <TileCard title="Orders" onClick={onOpenOrders}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">
              {openOrders} <span className="text-[16px] font-normal text-[#6b7280]">open</span>
            </p>
            <p className="text-[12px] text-[#6b7280] mt-1">{closedOrders} closed orders</p>
          </TileCard>

          {fabricator.modules.shipments ? (
            <TileCard title="Shipments" onClick={onOpenShipments}>
              <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">{postedShipments}</p>
              <p className="text-[12px] text-[#6b7280] mt-1">Posted shipments</p>
            </TileCard>
          ) : (
            <TileCard title="Shipments" variant="disabled" disabledNote={`${fabricator.name} doesn't offer the Shipments module`} />
          )}

          {fabricator.modules.invoices ? (
            <TileCard title="Invoices" onClick={onOpenInvoices}>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                {AGING_LABELS.map(({ key, label }) => (
                  <div key={key}>
                    <p className="text-[10px] text-[#9ca3af] uppercase">{label}</p>
                    <p className="text-[13px] font-semibold text-[#1a1a1a] whitespace-nowrap">{formatCurrency(buckets[key])}</p>
                  </div>
                ))}
              </div>
            </TileCard>
          ) : (
            <TileCard title="Invoices" variant="disabled" disabledNote={`${fabricator.name} doesn't offer the Invoices module`} />
          )}

          <TileCard title="Messages" onClick={onOpenMessages}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">{unreadMessages}</p>
            <p className="text-[12px] text-[#6b7280] mt-1">Unread of {scopedThreads.length} messages</p>
          </TileCard>
        </div>

        {/* Upcoming Schedule */}
        <div>
          <div className="flex items-center justify-between border-b border-[#e8e8e8] pb-2 mb-3">
            <span className="text-[16px] font-medium text-[#1a1a1a]">Upcoming Schedule</span>
          </div>

          {actionSchedule.length > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="5.5" stroke="#C62828" strokeWidth="1.1" />
                <path d="M6.5 4.33333V6.5" stroke="#C62828" strokeWidth="1.1" strokeLinecap="round" />
                <path d="M6.5 8.66667H6.505" stroke="#C62828" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              <span className="text-[11px] font-semibold text-[#c62828] uppercase tracking-wider">Action Required</span>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {Object.entries(groupedByDate).map(([date, items]) => (
              <div key={date}>
                <div className="flex items-center justify-between mb-2 pt-1">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">{date}</span>
                  <span className="text-[11px] text-[#9e9e9e]">{items.length} {items.length === 1 ? 'order' : 'orders'}</span>
                </div>

                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white shadow-sm"
                      style={{
                        borderTop: '1px solid #d0d0d0',
                        borderRight: '1px solid #d0d0d0',
                        borderBottom: '1px solid #d0d0d0',
                        borderLeft: `6px solid ${item.status === 'action-required' ? '#c62828' : item.status === 'in-transit' ? '#2d6cb8' : item.status === 'confirmed' ? '#0d7a6e' : '#c8c8c8'}`,
                      }}
                    >
                      {item.alert && (
                        <div
                          className="px-5 py-2 text-[12px] text-[#c62828]"
                          style={{ backgroundColor: '#fdecea', borderLeft: 'none', borderBottom: '1px solid #f5c2c2' }}
                        >
                          {item.alert}
                        </div>
                      )}
                      <div className="pl-5 pr-4 py-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <StatusBadge status={item.status} />
                          <span className="text-[12px] font-medium text-[#9e9e9e]">{item.orderNo}</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-[14px] font-medium text-[#1a1a1a]">{item.title}</p>
                            <p className="text-[12px] text-[#9e9e9e] mt-0.5">{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {sortedSchedule.length === 0 && (
              <p className="text-[13px] text-[#9ca3af]">No upcoming schedule items for this job.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
