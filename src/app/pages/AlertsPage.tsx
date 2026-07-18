import { ChevronRight, MessageSquare, Reply } from 'lucide-react';
import { OrderIcon, ShippingIcon, InvoiceIcon, type IconComponent } from '../components/icons/TileIcons';
import { PageHeader } from '../components/PageHeader';
import { ALERT_KIND_LABEL, alertsForScope, type Alert, type AlertKind } from '../data/alerts';
import { findJob } from '../data/filters';

interface AlertsPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  onOpenAlert: (alert: Alert) => void;
}

const KIND_STYLE: Record<AlertKind, { icon: IconComponent; color: string; bg: string }> = {
  'invoice-new': { icon: InvoiceIcon, color: '#0d7a6e', bg: '#e6f4f2' },
  'invoice-status-change': { icon: InvoiceIcon, color: '#2d6cb8', bg: '#e8f0fa' },
  'invoice-due-soon': { icon: InvoiceIcon, color: '#c62828', bg: '#fdecea' },
  'delivery-date-requested': { icon: OrderIcon, color: '#fe9a00', bg: '#fff4e0' },
  'delivery-date-responded': { icon: OrderIcon, color: '#0d7a6e', bg: '#e6f4f2' },
  'shipment-created': { icon: ShippingIcon, color: '#2d6cb8', bg: '#e8f0fa' },
  'shipment-status-change': { icon: ShippingIcon, color: '#2d6cb8', bg: '#e8f0fa' },
  'message-new': { icon: MessageSquare, color: '#0d7a6e', bg: '#e6f4f2' },
  'message-reply': { icon: Reply, color: '#6b7280', bg: '#f3f4f6' },
};

function toSortKey(timestamp: string): number {
  const parsed = Date.parse(timestamp.replace(' · ', ' '));
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function AlertsPage({ fabricatorId, selectedJob, onJobChange, onOpenAlert }: AlertsPageProps) {
  const alerts = alertsForScope((jobName) => findJob(jobName)?.fabricatorId, fabricatorId, selectedJob).sort(
    (a, b) => toSortKey(b.timestamp) - toSortKey(a.timestamp)
  );

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Alerts" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="p-4 sm:p-8">
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          {alerts.map((alert) => {
            const style = KIND_STYLE[alert.kind];
            const Icon = style.icon;
            const clickable = !!alert.sourceRef;
            return (
              <button
                key={alert.id}
                onClick={() => onOpenAlert(alert)}
                className={`w-full text-left flex items-start gap-3 px-4 sm:px-5 py-4 border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#f9fafb] transition-colors ${clickable ? '' : 'cursor-default'}`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: style.bg }}
                >
                  <Icon size={16} color={style.color} strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                    {!alert.read && <span className="w-2 h-2 rounded-full bg-[#0d7a6e] shrink-0" />}
                    <span className={`text-[14px] ${alert.read ? 'font-medium text-[#1a1a1a]' : 'font-semibold text-[#1a1a1a]'}`}>
                      {alert.title}
                    </span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-sm shrink-0"
                      style={{ color: style.color, backgroundColor: style.bg }}
                    >
                      {ALERT_KIND_LABEL[alert.kind]}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#374151]">{alert.body}</p>
                  <p className="text-[12px] text-[#9ca3af] mt-1">
                    {alert.jobName} · {alert.timestamp}
                  </p>
                </div>
                {clickable && <ChevronRight size={16} className="text-[#d0d0d0] shrink-0 mt-2" />}
              </button>
            );
          })}
          {alerts.length === 0 && <div className="px-4 py-8 text-center text-[13px] text-[#9ca3af]">No alerts found.</div>}
        </div>
      </div>
    </div>
  );
}
