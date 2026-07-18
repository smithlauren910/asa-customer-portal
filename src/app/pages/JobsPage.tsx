import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { StatusBadge } from '../components/StatusBadge';
import { jobsForFabricator } from '../data/filters';

interface JobsPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  onOpenJob: (jobName: string) => void;
}

type JobTab = 'Open' | 'Closed';

export function JobsPage({ fabricatorId, selectedJob, onJobChange, onOpenJob }: JobsPageProps) {
  const [tab, setTab] = useState<JobTab>('Open');

  const jobs = jobsForFabricator(fabricatorId).filter((j) => (tab === 'Open' ? j.status === 'open' : j.status === 'closed'));

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Jobs" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />

      <div className="p-4 sm:p-8">
        <div className="flex gap-2 mb-4">
          {(['Open', 'Closed'] as JobTab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-[14px] border transition-colors ${
                tab === t
                  ? 'bg-[#0d7a6e] border-[#0d7a6e] text-white font-medium'
                  : 'bg-white border-[#d0d0d0] text-[#1a1a1a] hover:border-[#0d7a6e]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm md:overflow-hidden">
          <table className="w-full border-collapse block md:table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[160px]">Fabricator Job Number</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[180px]">Customer Job Number</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[100px]">Status</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {jobs.map((job) => (
                <tr
                  key={job.name}
                  onClick={() => onOpenJob(job.name)}
                  className="block md:table-row border border-[#e5e7eb] md:border-0 md:border-b md:border-b-[#f3f4f6] rounded-lg md:rounded-none mb-3 md:mb-0 p-3 md:p-0 bg-white shadow-sm md:shadow-none hover:bg-[#f9fafb] cursor-pointer transition-colors"
                >
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Fabricator Job Number</span>
                    <span className="text-[13px] text-[#1f2937] font-medium">{job.fabricatorJobNumber}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Job Name</span>
                    <span className="text-[14px] font-semibold md:font-normal md:text-[13px] text-[#1a1a1a]">{job.name}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Customer Job Number</span>
                    <span className="text-[13px] text-[#6b7280]">{job.customerJobNumber}</span>
                  </td>
                  <td className="flex justify-between items-center gap-2 py-1 md:table-cell md:px-4 md:py-3 md:align-top">
                    <span className="text-[11px] font-semibold text-[#9ca3af] uppercase md:hidden">Status</span>
                    <StatusBadge status={job.status} />
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr className="block md:table-row">
                  <td colSpan={4} className="block md:table-cell px-4 py-8 text-center text-[13px] text-[#9ca3af]">No {tab.toLowerCase()} jobs.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
