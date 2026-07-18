import { matchesJob } from './filters';

export type AlertKind =
  | 'invoice-new'
  | 'invoice-status-change'
  | 'invoice-due-soon'
  | 'delivery-date-requested'
  | 'delivery-date-responded'
  | 'shipment-created'
  | 'shipment-status-change'
  | 'message-new'
  | 'message-reply';

export interface Alert {
  id: string;
  kind: AlertKind;
  jobName: string;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  sourceRef?: { type: 'order' | 'invoice' | 'thread' | 'shipment'; id: string };
}

export const ALERT_KIND_LABEL: Record<AlertKind, string> = {
  'invoice-new': 'New Invoice',
  'invoice-status-change': 'Invoice Status Change',
  'invoice-due-soon': 'Invoice Due Soon',
  'delivery-date-requested': 'Delivery Date Requested',
  'delivery-date-responded': 'Delivery Date Response',
  'shipment-created': 'Shipment Created',
  'shipment-status-change': 'Shipment Status Change',
  'message-new': 'New Message',
  'message-reply': 'Message Reply',
};

export let ALERTS: Alert[] = [
  {
    id: 'alert-1',
    kind: 'invoice-new',
    jobName: 'Westmoreland Mall Garage',
    title: 'New invoice available',
    body: 'Invoice INV-2044 is now available for Westmoreland Mall Garage.',
    timestamp: 'Jun 8, 2026 · 7:30 AM',
    read: false,
    sourceRef: { type: 'invoice', id: 'inv-7' },
  },
  {
    id: 'alert-2',
    kind: 'invoice-status-change',
    jobName: 'Eastside Garage',
    title: 'Invoice closed',
    body: 'Invoice INV-2024 moved from Open to Closed.',
    timestamp: 'Jun 3, 2026 · 3:12 PM',
    read: true,
    sourceRef: { type: 'invoice', id: 'inv-4' },
  },
  {
    id: 'alert-3',
    kind: 'invoice-due-soon',
    jobName: 'Northgate Plaza — Pad B',
    title: 'Invoice due soon',
    body: 'Invoice INV-2038 is overdue by 45 days and needs attention.',
    timestamp: 'Jun 10, 2026 · 8:00 AM',
    read: false,
    sourceRef: { type: 'invoice', id: 'inv-2' },
  },
  {
    id: 'alert-4',
    kind: 'shipment-created',
    jobName: 'Allegheny County Jail Annex',
    title: 'Shipment created',
    body: 'Shipping ticket 10345 was created for Allegheny County Jail Annex.',
    timestamp: 'Jun 6, 2026 · 10:45 AM',
    read: true,
    sourceRef: { type: 'shipment', id: 'ship-7' },
  },
  {
    id: 'alert-5',
    kind: 'shipment-status-change',
    jobName: 'Maple Heights — Block 2',
    title: 'Shipment status changed',
    body: 'Shipping ticket 10402 for Maple Heights — Block 2 is now Confirmed.',
    timestamp: 'Jun 7, 2026 · 1:20 PM',
    read: false,
    sourceRef: { type: 'shipment', id: 'ship-3' },
  },
  {
    id: 'alert-6',
    kind: 'message-new',
    jobName: 'Rt. 30 Bridge Rehab',
    title: 'New message from fabricator',
    body: 'Pittsburgh Rebar Co. sent: "Revised structural drawings needed before release."',
    timestamp: 'Jun 9, 2026 · 9:14 AM',
    read: false,
    sourceRef: { type: 'thread', id: 'thread-1' },
  },
  {
    id: 'alert-7',
    kind: 'message-new',
    jobName: 'Westmoreland Mall Garage',
    title: 'New message from fabricator',
    body: 'Pittsburgh Rebar Co. sent: "Pour schedule moved up."',
    timestamp: 'Jun 5, 2026 · 2:47 PM',
    read: false,
    sourceRef: { type: 'thread', id: 'thread-2' },
  },
  {
    id: 'alert-8',
    kind: 'message-reply',
    jobName: 'Riverfront Tower',
    title: 'Reply received',
    body: 'Pittsburgh Rebar Co. replied to "Shipping ticket 10421 confirmed."',
    timestamp: 'Jun 2, 2026 · 11:02 AM',
    read: true,
    sourceRef: { type: 'thread', id: 'thread-3' },
  },
];

export function addAlert(alert: Omit<Alert, 'id' | 'read'> & { read?: boolean }) {
  ALERTS = [{ id: `alert-${Date.now()}`, read: false, ...alert }, ...ALERTS];
  return ALERTS;
}

export function markAlertRead(id: string) {
  const alert = ALERTS.find((a) => a.id === id);
  if (alert) alert.read = true;
}

export function alertsForScope(findJobFabricatorId: (jobName: string) => string | undefined, fabricatorId: string, selectedJob: string): Alert[] {
  return ALERTS.filter((a) => findJobFabricatorId(a.jobName) === fabricatorId && matchesJob(a.jobName, selectedJob));
}

export function unreadAlertCount(findJobFabricatorId: (jobName: string) => string | undefined, fabricatorId: string, selectedJob: string): number {
  return alertsForScope(findJobFabricatorId, fabricatorId, selectedJob).filter((a) => !a.read).length;
}
