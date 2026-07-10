import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { THREADS } from '../data/messages';
import { matchesJob, findJob } from '../data/filters';

interface MessagesPageProps {
  fabricatorId: string;
  selectedJob: string;
  onJobChange: (job: string) => void;
}

export function MessagesPage({ fabricatorId, selectedJob, onJobChange }: MessagesPageProps) {
  const [openThreadId, setOpenThreadId] = useState<string | null>(null);

  const threads = THREADS.filter((t) => findJob(t.jobName)?.fabricatorId === fabricatorId).filter((t) =>
    matchesJob(t.jobName, selectedJob)
  );

  const openThread = threads.find((t) => t.id === openThreadId);

  if (openThread) {
    return (
      <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
        <PageHeader title="Messages" fabricatorId={fabricatorId} selectedJob={selectedJob} onJobChange={onJobChange} />
        <div className="p-8 flex flex-col gap-4 max-w-[720px]">
          <button
            onClick={() => setOpenThreadId(null)}
            className="flex items-center gap-1.5 text-[#0d7a6e] text-[12px] w-fit hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="#0D7A6E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Messages
          </button>

          <div>
            <h1 className="text-[20px] font-medium text-[#1f2937]">{openThread.subject}</h1>
            <p className="text-[13px] text-[#6b7280] mt-1">{openThread.jobName}</p>
          </div>

          <div className="flex flex-col gap-3">
            {openThread.messages.map((m) => (
              <div key={m.id} className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] font-medium text-[#1f2937]">{m.from}</span>
                  <span className="text-[12px] text-[#9ca3af]">{m.timestamp}</span>
                </div>
                <p className="text-[14px] text-[#374151]">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-4">
            <textarea
              placeholder="Write a reply..."
              rows={3}
              className="w-full border border-[#d1d5db] rounded-md px-3 py-2.5 text-[14px] text-[#374151] bg-white outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e] resize-none mb-3"
            />
            <button className="px-5 py-2 rounded-full text-[14px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] transition-colors">
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
