import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import type { JobInfo } from '../data/filters';

interface JobLookupProps {
  jobs: JobInfo[];
  selectedJob: string;
  onJobChange: (jobName: string) => void;
}

export function JobLookup({ jobs, selectedJob, onJobChange }: JobLookupProps) {
  const [open, setOpen] = useState(false);
  const activeJob = jobs.find((j) => j.name === selectedJob);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="w-[340px] rounded-lg border border-[#d0d0d0] bg-white px-[14px] py-[8px] text-[13px] font-medium text-[#1a1a1a] flex items-center justify-between gap-2"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <span className="truncate">
            {activeJob ? `${activeJob.fabricatorJobNumber} — ${activeJob.name}` : 'All Jobs'}
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[520px] p-0" align="start">
        <Command style={{ fontFamily: 'Inter, sans-serif' }}>
          <CommandInput placeholder="Search by fabricator #, job name, or customer #..." />
          <div className="grid grid-cols-[110px_1fr_130px] gap-3 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-[#9ca3af] border-b border-[#f3f4f6]">
            <span>Fabricator Job #</span>
            <span>Job Name</span>
            <span>Customer Job #</span>
          </div>
          <CommandList>
            <CommandEmpty>No jobs found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="All Jobs"
                onSelect={() => { onJobChange('All Jobs'); setOpen(false); }}
                className="grid grid-cols-[110px_1fr_130px] gap-3 text-[13px]"
              >
                <span className="font-medium text-[#1a1a1a]">All Jobs</span>
                <span className="text-[#9ca3af]">—</span>
                <span className="text-[#9ca3af]">—</span>
              </CommandItem>
              {jobs.map((job) => (
                <CommandItem
                  key={job.name}
                  value={`${job.fabricatorJobNumber} ${job.name} ${job.customerJobNumber}`}
                  onSelect={() => { onJobChange(job.name); setOpen(false); }}
                  className="grid grid-cols-[110px_1fr_130px] gap-3 text-[13px]"
                >
                  <span className="font-medium text-[#1a1a1a]">{job.fabricatorJobNumber}</span>
                  <span className="text-[#1a1a1a] truncate">{job.name}</span>
                  <span className="text-[#6b7280]">{job.customerJobNumber}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
