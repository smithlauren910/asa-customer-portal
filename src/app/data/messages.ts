import { CURRENT_USER_NAME } from './currentUser';

export interface Message {
  id: string;
  from: string;
  sender: 'customer' | 'fabricator';
  body: string;
  timestamp: string;
}

export interface MessageThread {
  id: string;
  jobName: string;
  subject: string;
  unread: boolean;
  messages: Message[];
}

export const THREADS: MessageThread[] = [
  {
    id: 'thread-1',
    jobName: 'Rt. 30 Bridge Rehab',
    subject: 'Revised structural drawings needed before release',
    unread: true,
    messages: [
      {
        id: 'm1',
        from: 'Pittsburgh Rebar Co.',
        sender: 'fabricator',
        body: 'Revised structural drawings are required before release. Please upload updated sheet S-104 from your engineer of record.',
        timestamp: 'Jun 9, 2026 · 9:14 AM',
      },
    ],
  },
  {
    id: 'thread-2',
    jobName: 'Westmoreland Mall Garage',
    subject: 'Pour schedule moved up',
    unread: true,
    messages: [
      {
        id: 'm2',
        from: 'Pittsburgh Rebar Co.',
        sender: 'fabricator',
        body: 'Pour schedule moved up. Confirm revised delivery window by Jun 12 or the order will be rescheduled.',
        timestamp: 'Jun 5, 2026 · 2:47 PM',
      },
    ],
  },
  {
    id: 'thread-3',
    jobName: 'Riverfront Tower',
    subject: 'Shipping ticket 10421 confirmed',
    unread: false,
    messages: [
      {
        id: 'm3',
        from: 'Pittsburgh Rebar Co.',
        sender: 'fabricator',
        body: 'Shipping ticket 10421 for Riverfront Tower — Floor 3 has been confirmed for Jun 12, 2026.',
        timestamp: 'Jun 2, 2026 · 11:02 AM',
      },
      {
        id: 'm4',
        from: 'John Doe',
        sender: 'customer',
        body: 'Thanks, confirmed on our end as well.',
        timestamp: 'Jun 2, 2026 · 11:30 AM',
      },
    ],
  },
  {
    id: 'thread-4',
    jobName: 'Maple Heights',
    subject: 'Invoice INV-2031 question',
    unread: false,
    messages: [
      {
        id: 'm5',
        from: 'John Doe',
        sender: 'customer',
        body: 'Can you confirm the tonnage on invoice INV-2031 before we process payment?',
        timestamp: 'May 16, 2026 · 4:10 PM',
      },
    ],
  },
];

export function addReply(threadId: string, body: string) {
  const thread = THREADS.find((t) => t.id === threadId);
  if (!thread) return;
  thread.messages.push({
    id: `m-${Date.now()}`,
    from: CURRENT_USER_NAME,
    sender: 'customer',
    body,
    timestamp: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
  });
}
