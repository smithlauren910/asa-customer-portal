import { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { BackButton } from '../components/BackButton';
import { THREADS, type MessageThread } from '../data/messages';
import { matchesJob, findJob } from '../data/filters';

interface MessagesPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
  onSendReply: (thread: MessageThread, body: string) => void;
  onOpenThread: (threadId: string) => void;
  focusThreadId?: string;
}

export function MessagesPage({ fabricatorId, selectedJob, onJobChange, onSendReply, onOpenThread, focusThreadId }: MessagesPageProps) {
  const [openThreadId, setOpenThreadId] = useState<string | null>(focusThreadId ?? null);
  const [replyText, setReplyText] = useState('');

  const threads = THREADS.filter((t) => findJob(t.jobName)?.fabricatorId === fabricatorId).filter((t) =>
    matchesJob(t.jobName, selectedJob)
  );

  const openThread = threads.find((t) => t.id === openThreadId);

  // onOpenThread is intentionally omitted from deps — it's a new function identity on every
  // App render, and including it would re-fire this effect (and setRefreshTick) in a loop.
  useEffect(() => {
    if (openThreadId) onOpenThread(openThreadId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openThreadId]);

  const handleSend = () => {
    if (!openThread || !replyText.trim()) return;
    onSendReply(openThread, replyText.trim());
    setReplyText('');
  };

  if (openThread) {
    return (
      <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0" style={{ fontFamily: 'Inter, sans-serif' }}>
        <PageHeader title="Messages" showFilters={false} />
        <div className="flex-1 flex flex-col min-h-0 px-8 pt-6 pb-8">
          <BackButton label="Back to Messages" onClick={() => setOpenThreadId(null)} />

          <div className="mb-4 shrink-0">
            <h1 className="text-[20px] font-medium text-[#1f2937]">{openThread.subject}</h1>
            <p className="text-[13px] text-[#6b7280] mt-1">{openThread.jobName}</p>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col gap-3 min-h-0">
            {openThread.messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[65%] rounded-lg p-4 shadow-sm ${
                    m.sender === 'customer'
                      ? 'bg-[#0d7a6e] text-white'
                      : 'bg-white border border-[#e5e7eb] text-[#374151]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className={`text-[12px] font-semibold ${m.sender === 'customer' ? 'text-white/90' : 'text-[#1f2937]'}`}>
                      {m.sender === 'customer' ? 'You' : m.from}
                    </span>
                    <span className={`text-[11px] ${m.sender === 'customer' ? 'text-white/70' : 'text-[#9ca3af]'}`}>
                      {m.timestamp}
                    </span>
                  </div>
                  <p className="text-[14px]">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-4 mt-4 shrink-0">
            <textarea
              placeholder="Write a reply..."
              rows={3}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full border border-[#d1d5db] rounded-md px-3 py-2.5 text-[14px] text-[#374151] bg-white outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e] resize-none mb-3"
            />
            <button
              onClick={handleSend}
              disabled={!replyText.trim()}
              className="px-5 py-2 rounded-full text-[14px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Send Reply
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      <PageHeader title="Messages" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />
      <div className="p-8">
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          {threads.map((thread) => (
            <button
              key={thread.id}
              onClick={() => setOpenThreadId(thread.id)}
              className="w-full text-left flex items-center justify-between gap-4 px-5 py-4 border-b border-[#f3f4f6] last:border-b-0 hover:bg-[#f9fafb] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                {thread.unread && <span className="w-2 h-2 rounded-full bg-[#0d7a6e] shrink-0" />}
                <div className="min-w-0">
                  <p className={`text-[14px] truncate ${thread.unread ? 'font-semibold text-[#1a1a1a]' : 'font-medium text-[#1a1a1a]'}`}>
                    {thread.subject}
                  </p>
                  <p className="text-[12px] text-[#9ca3af] truncate">{thread.jobName}</p>
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#D0D0D0" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
          {threads.length === 0 && (
            <div className="px-4 py-8 text-center text-[13px] text-[#9ca3af]">No messages found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
