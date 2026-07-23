import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MessageSquare } from 'lucide-react';
import { JobIcon, OrderIcon, ShippingIcon, InvoiceIcon } from '../components/icons/TileIcons';
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

const AGING_LABELS: { key: AgingBucket; label: string; color: string }[] = [
  { key: 'current', label: 'Current', color: '#0d7a6e' },
  { key: '30', label: '30', color: '#fe9a00' },
  { key: '60', label: '60', color: '#f2751a' },
  { key: '90', label: '90+', color: '#c62828' },
];

const UPCOMING_SHIPMENT_STATUSES = ['scheduled', 'confirmed', 'in-transit', 'shipped'];

function timelineBorderColor(status: string): string {
  switch (status) {
    case 'confirmed':
    case 'paid':
      return '#0d7a6e';
    case 'in-transit':
    case 'shipped':
      return '#2d6cb8';
    case 'scheduled':
      return '#fe9a00';
    case 'overdue':
      return '#c62828';
    default:
      return '#c8c8c8';
  }
}

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
  const invoiceTotal = Object.values(buckets).reduce((sum, v) => sum + v, 0);
  const pieData = AGING_LABELS.map(({ key, label, color }) => ({ name: label, value: buckets[key], color })).filter(
    (d) => d.value > 0
  );

  // Messages
  const scopedThreads = THREADS.filter((t) => inScope(t.jobName));
  const unreadMessages = scopedThreads.filter((t) => t.unread).length;

  // Unified upcoming timeline — upcoming shipments + open/overdue invoices, sorted by date
  interface TimelineItem {
    id: string;
    date: string;
    dateSort: number;
    kind: 'shipment' | 'invoice';
    status: string;
    title: string;
    subtitle: string;
  }

  const upcomingShipments: TimelineItem[] = scopedShipments
    .filter((s) => UPCOMING_SHIPMENT_STATUSES.includes(s.status))
    .map((s) => ({
      id: s.id,
      date: s.date,
      dateSort: Date.parse(s.date),
      kind: 'shipment',
      status: s.status,
      title: s.ticketNo === '—' ? `${s.jobName} — Shipment Scheduled` : `${s.jobName} — Shipping Ticket ${s.ticketNo}`,
      subtitle: 'Shipment',
    }));

  const upcomingInvoices: TimelineItem[] = fabricator.modules.invoices
    ? scopedInvoices.map((i) => ({
        id: i.id,
        date: i.date,
        dateSort: Date.parse(i.date),
        kind: 'invoice',
        status: i.status,
        title: `${i.jobName} — Invoice ${i.invoiceNo}`,
        subtitle: `${formatCurrency(i.amountOpen)} open of ${formatCurrency(i.amount)}`,
      }))
    : [];

  const timelineItems = [...upcomingShipments, ...upcomingInvoices].sort((a, b) => a.dateSort - b.dateSort);
  const groupedByDate: Record<string, TimelineItem[]> = {};
  timelineItems.forEach((item) => {
    if (!groupedByDate[item.date]) groupedByDate[item.date] = [];
    groupedByDate[item.date].push(item);
  });

  const activeJob = selectedJob !== 'All Jobs' ? findJob(selectedJob) : undefined;
  const title = activeJob ? `${activeJob.fabricatorJobNumber} · ${activeJob.name}` : 'Dashboard';

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title={title} fabricatorId={fabricator.id} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="px-4 sm:px-8 py-4 sm:py-6 flex flex-col gap-6">
        {/* Tiles Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <TileCard title="Jobs" icon={JobIcon} onClick={onOpenJobs}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">
              {openJobs} <span className="text-[16px] font-normal text-[#6b7280]">open of {jobs.length}</span>
            </p>
            <p className="text-[12px] text-[#6b7280] mt-1">Jobs in scope</p>
          </TileCard>

          <TileCard title="Orders" icon={OrderIcon} onClick={onOpenOrders}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">
              {openOrders} <span className="text-[16px] font-normal text-[#6b7280]">open</span>
            </p>
            <p className="text-[12px] text-[#6b7280] mt-1">{closedOrders} closed orders</p>
          </TileCard>

          {fabricator.modules.shipments ? (
            <TileCard title="Shipments" icon={ShippingIcon} onClick={onOpenShipments}>
              <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">{postedShipments}</p>
              <p className="text-[12px] text-[#6b7280] mt-1">Posted shipments</p>
            </TileCard>
          ) : (
            <TileCard title="Shipments" icon={ShippingIcon} variant="disabled" disabledNote={`${fabricator.name} doesn't offer the Shipments module`} />
          )}

          {fabricator.modules.invoices ? (
            <TileCard title="Invoices" icon={InvoiceIcon} onClick={onOpenInvoices}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-[52px] h-[52px] shrink-0">
                  {invoiceTotal > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          dataKey="value"
                          innerRadius={14}
                          outerRadius={26}
                          paddingAngle={pieData.length > 1 ? 2 : 0}
                          stroke="none"
                        >
                          {pieData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="w-full h-full rounded-full border-[6px] border-[#e5e7eb]" />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 w-full">
                  {AGING_LABELS.map(({ key, label, color }) => (
                    <div key={key} className="flex items-center gap-1 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                      <div className="min-w-0">
                        <p className="text-[9px] text-[#9ca3af] uppercase leading-none">{label}</p>
                        <p className="text-[11px] font-semibold text-[#1a1a1a] leading-tight truncate">{formatCurrency(buckets[key])}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TileCard>
          ) : (
            <TileCard title="Invoices" icon={InvoiceIcon} variant="disabled" disabledNote={`${fabricator.name} doesn't offer the Invoices module`} />
          )}

          <TileCard title="Messages" icon={MessageSquare} onClick={onOpenMessages}>
            <p className="text-[28px] font-semibold text-[#1a1a1a] leading-none">{unreadMessages}</p>
            <p className="text-[12px] text-[#6b7280] mt-1">Unread of {scopedThreads.length} messages</p>
          </TileCard>
        </div>

        {/* Upcoming Activity */}
        <div>
          <div className="flex items-center justify-between border-b border-[#e8e8e8] pb-2 mb-3">
            <span className="text-[16px] font-medium text-[#1a1a1a]">Upcoming Activity</span>
          </div>

          <div className="flex flex-col gap-4">
            {Object.entries(groupedByDate).map(([date, items]) => (
              <div key={date}>
                <div className="flex items-center justify-between mb-2 pt-1">
                  <span className="text-[13px] font-medium text-[#1a1a1a]">{date}</span>
                  <span className="text-[11px] text-[#9e9e9e]">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                </div>

                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white shadow-sm"
                      style={{
                        border: `1px solid ${timelineBorderColor(item.status)}`,
                      }}
                    >
                      <div className="px-4 py-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <StatusBadge status={item.status} />
                          <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                            {item.kind === 'shipment' ? (
                              <ShippingIcon size={14} className="text-[#9e9e9e]" />
                            ) : (
                              <InvoiceIcon size={14} className="text-[#9e9e9e]" />
                            )}
                          </span>
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
            {timelineItems.length === 0 && (
              <p className="text-[13px] text-[#9ca3af]">No upcoming shipments or open invoices for this job.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
