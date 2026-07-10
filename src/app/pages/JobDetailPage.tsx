import { findJob } from '../data/filters';
import { getJobFinancials, formatWeight } from '../data/jobFinancials';
import { formatCurrency } from './InvoicesPage';
import type { Fabricator } from '../data/fabricators';

interface JobDetailPageProps {
  fabricator: Fabricator;
  jobName: string;
  onBack: () => void;
}

export function JobDetailPage({ fabricator, jobName, onBack }: JobDetailPageProps) {
  const job = findJob(jobName);
  const financials = getJobFinancials(jobName);

  if (!job) return null;

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto p-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <button onClick={onBack} className="flex items-center gap-1.5 text-[#0d7a6e] text-[12px] mb-4 hover:underline w-fit">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="#0D7A6E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Jobs
      </button>

      <div className="mb-6 flex items-center gap-3">
        <div>
          <h1 className="text-[24px] font-medium text-[#1f2937]">{job.name}</h1>
          <p className="text-[13px] text-[#6b7280] mt-1">
            {job.fabricatorJobNumber} · Customer # {job.customerJobNumber}
          </p>
        </div>
        <span
          className="px-2 py-0.5 rounded-sm text-[11px] font-medium text-white capitalize"
          style={{ backgroundColor: job.status === 'open' ? '#0d7a6e' : '#9ca3af' }}
        >
          {job.status}
        </span>
      </div>

      {fabricator.modules.jobFinancials ? (
        <div className="max-w-[720px] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-[16px] font-medium text-[#1a1a1a]">Project Progress</h2>
            <span className="text-[11px] text-[#9ca3af] italic">Fabricator-controlled setting</span>
          </div>

          <ProgressBlock
            label="Shipped vs. Estimated Weight"
            percent={financials.percentShipped}
            stats={[
              ['Estimated', formatWeight(financials.estimatedWeightLbs)],
              ['Shipped to Date', formatWeight(financials.shippedWeightLbs)],
              ['Remaining', formatWeight(financials.remainingWeightLbs)],
            ]}
          />

          <ProgressBlock
            label="Invoiced vs. Project Value"
            percent={financials.percentInvoiced}
            stats={[
              ['Estimated Total', formatCurrency(financials.estimatedValue)],
              ['Invoiced to Date', formatCurrency(financials.invoicedToDate)],
              ['Remaining', formatCurrency(financials.remainingValue)],
            ]}
          />
        </div>
      ) : (
        <div className="max-w-[720px] bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6">
          <p className="text-[13px] text-[#9ca3af] italic">
            Job financial detail is not enabled for {fabricator.name}.
          </p>
        </div>
      )}
    </div>
  );
}

function ProgressBlock({
  label,
  percent,
  stats,
}: {
  label: string;
  percent: number;
  stats: [string, string][];
}) {
  return (
    <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[14px] font-medium text-[#1f2937]">{label}</h3>
        <span className="text-[14px] font-semibold text-[#0d7a6e]">{percent}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-[#e5e7eb] overflow-hidden mb-5">
        <div className="h-full bg-[#0d7a6e] rounded-full transition-all" style={{ width: `${percent}%` }} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.map(([label, value]) => (
          <div key={label}>
            <p className="text-[11px] text-[#9ca3af] uppercase tracking-wide">{label}</p>
            <p className="text-[15px] font-semibold text-[#1a1a1a] mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
