import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
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

      <div className="p-8">
        <div className="flex gap-2 mb-5">
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

        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f3f4f6] border-b border-[#e5e7eb]">
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[140px]">Fabricator Job #</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2">Job Name</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[160px]">Customer Job #</th>
                <th className="text-left text-[13px] font-semibold text-[#374151] px-4 py-2 w-[100px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr
                  key={job.name}
                  onClick={() => onOpenJob(job.name)}
                  className="border-b border-[#f3f4f6] hover:bg-[#f9fafb] cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 text-[13px] text-[#1f2937] font-medium">{job.fabricatorJobNumber}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a]">{job.name}</td>
                  <td className="px-4 py-3 text-[13px] text-[#6b7280]">{job.customerJobNumber}</td>
                  <td className="px-4 py-3 text-[13px] text-[#1a1a1a] capitalize">{job.status}</td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-[13px] text-[#9ca3af]">No {tab.toLowerCase()} jobs.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
