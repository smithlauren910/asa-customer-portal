import { JobLookup } from './JobLookup';
import { jobsForFabricator } from '../data/filters';

interface PageHeaderProps {
  title: string;
  fabricatorId?: string;
  selectedJob?: string;
  onJobChange?: (job: string) => void;
  showFilters?: boolean;
}

export function PageHeader({
  title,
  fabricatorId,
  selectedJob,
  onJobChange,
  showFilters = true,
}: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-[#d0d0d0] px-6 pt-3 pb-[13px] flex items-center justify-between shrink-0">
      <h1 className="text-[24px] font-medium text-[#1a1a1a]">{title}</h1>

      {showFilters && fabricatorId && selectedJob !== undefined && onJobChange && (
        <JobLookup jobs={jobsForFabricator(fabricatorId)} selectedJob={selectedJob} onJobChange={onJobChange} />
      )}
    </div>
  );
}
