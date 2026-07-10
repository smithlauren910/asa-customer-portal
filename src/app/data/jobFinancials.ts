import { matchesJob } from './filters';
import { ORDERS } from '../pages/OrdersPage';
import { INVOICES } from '../pages/InvoicesPage';

const SHIPPED_ORDER_STATUSES = ['confirmed', 'in-transit', 'shipped', 'delivered'];

export const JOB_ESTIMATES: Record<string, { estimatedWeightLbs: number; estimatedValue: number }> = {
  'Riverfront Tower': { estimatedWeightLbs: 9500, estimatedValue: 150000 },
  'Northgate Plaza': { estimatedWeightLbs: 1200, estimatedValue: 55000 },
  'Maple Heights': { estimatedWeightLbs: 3000, estimatedValue: 95000 },
  'Eastside Garage': { estimatedWeightLbs: 8100, estimatedValue: 14820 },
  'Rt. 30 Bridge Rehab': { estimatedWeightLbs: 28000, estimatedValue: 580000 },
  'Mon Valley Expressway': { estimatedWeightLbs: 40000, estimatedValue: 890000 },
  'Allegheny County Jail Annex': { estimatedWeightLbs: 12000, estimatedValue: 210000 },
  'Westmoreland Mall Garage': { estimatedWeightLbs: 9000, estimatedValue: 68000 },
};

function parseWeightLbs(weight: string): number {
  return parseFloat(weight.replace(/[^0-9.]/g, '')) || 0;
}

export interface JobFinancials {
  estimatedWeightLbs: number;
  shippedWeightLbs: number;
  remainingWeightLbs: number;
  percentShipped: number;
  estimatedValue: number;
  invoicedToDate: number;
  remainingValue: number;
  percentInvoiced: number;
}

export function getJobFinancials(jobName: string): JobFinancials {
  const estimate = JOB_ESTIMATES[jobName] ?? { estimatedWeightLbs: 0, estimatedValue: 0 };

  const shippedWeightLbs = ORDERS.filter(
    (o) => matchesJob(o.jobName, jobName) && SHIPPED_ORDER_STATUSES.includes(o.status)
  ).reduce((sum, o) => sum + parseWeightLbs(o.weight), 0);

  const invoicedToDate = INVOICES.filter((i) => matchesJob(i.jobName, jobName)).reduce((sum, i) => sum + i.amount, 0);

  const percentShipped = estimate.estimatedWeightLbs > 0
    ? Math.min(100, Math.round((shippedWeightLbs / estimate.estimatedWeightLbs) * 100))
    : 0;
  const percentInvoiced = estimate.estimatedValue > 0
    ? Math.min(100, Math.round((invoicedToDate / estimate.estimatedValue) * 100))
    : 0;

  return {
    estimatedWeightLbs: estimate.estimatedWeightLbs,
    shippedWeightLbs,
    remainingWeightLbs: Math.max(0, estimate.estimatedWeightLbs - shippedWeightLbs),
    percentShipped,
    estimatedValue: estimate.estimatedValue,
    invoicedToDate,
    remainingValue: Math.max(0, estimate.estimatedValue - invoicedToDate),
    percentInvoiced,
  };
}

export function formatWeight(lbs: number): string {
  return `${lbs.toLocaleString('en-US')} lbs`;
}
