export interface Fabricator {
  id: string;
  name: string;
  modules: {
    shipments: boolean;
    invoices: boolean;
    /** Controls whether the Job Detail financial/weight rollup block is shown. Fabricator-controlled setting. */
    jobFinancials: boolean;
  };
}

export const FABRICATORS: Fabricator[] = [
  {
    id: 'pittsburgh-rebar',
    name: 'Pittsburgh Rebar Co.',
    modules: { shipments: true, invoices: true, jobFinancials: true },
  },
  {
    id: 'keystone-steel',
    name: 'Keystone Steel Fabricators',
    modules: { shipments: true, invoices: false, jobFinancials: false },
  },
];
