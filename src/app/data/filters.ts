export interface JobInfo {
  name: string;
  fabricatorId: string;
  fabricatorJobNumber: string;
  customerJobNumber: string;
  status: 'open' | 'closed';
}

export const JOBS: JobInfo[] = [
  { name: 'Riverfront Tower', fabricatorId: 'pittsburgh-rebar', fabricatorJobNumber: 'JOB-1024', customerJobNumber: 'RFT-2026-003', status: 'open' },
  { name: 'Northgate Plaza', fabricatorId: 'pittsburgh-rebar', fabricatorJobNumber: 'JOB-1031', customerJobNumber: 'NGP-2026-011', status: 'open' },
  { name: 'Maple Heights', fabricatorId: 'pittsburgh-rebar', fabricatorJobNumber: 'JOB-1042', customerJobNumber: 'MH-2026-007', status: 'open' },
  { name: 'Eastside Garage', fabricatorId: 'pittsburgh-rebar', fabricatorJobNumber: 'JOB-0998', customerJobNumber: 'EG-2025-044', status: 'closed' },
  { name: 'Rt. 30 Bridge Rehab', fabricatorId: 'pittsburgh-rebar', fabricatorJobNumber: 'JOB-1055', customerJobNumber: 'PADOT-30-119', status: 'open' },
  { name: 'Mon Valley Expressway', fabricatorId: 'keystone-steel', fabricatorJobNumber: 'KS-4471', customerJobNumber: 'PADOT-MV-204', status: 'open' },
  { name: 'Allegheny County Jail Annex', fabricatorId: 'keystone-steel', fabricatorJobNumber: 'KS-4488', customerJobNumber: 'ACJ-2026-002', status: 'open' },
  { name: 'Westmoreland Mall Garage', fabricatorId: 'keystone-steel', fabricatorJobNumber: 'KS-4502', customerJobNumber: 'WMG-2026-009', status: 'closed' },
];

export function jobsForFabricator(fabricatorId: string): JobInfo[] {
  return JOBS.filter((j) => j.fabricatorId === fabricatorId);
}

export function jobNamesForFabricator(fabricatorId: string): string[] {
  return ['All Jobs', ...jobsForFabricator(fabricatorId).map((j) => j.name)];
}

export function matchesJob(itemJob: string, selectedJob: string): boolean {
  return selectedJob === 'All Jobs' || itemJob.startsWith(selectedJob);
}

export function findJob(name: string): JobInfo | undefined {
  return JOBS.find((j) => name.startsWith(j.name));
}
