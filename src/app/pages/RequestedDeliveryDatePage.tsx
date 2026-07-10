import { useState } from 'react';

interface RequestedDeliveryDatePageProps {
  order: {
    orderNo: string;
    jobName: string;
    description: string;
    scheduledDeliveryDate?: string;
  };
  onBack: () => void;
}

export function RequestedDeliveryDatePage({ order, onBack }: RequestedDeliveryDatePageProps) {
  const [requestedDate, setRequestedDate] = useState('');
  const [requestedBy, setRequestedBy] = useState('John Doe');
  const [submitted, setSubmitted] = useState(false);
  const [requestedOn, setRequestedOn] = useState('');

  const handleSubmit = () => {
    if (!requestedDate) return;
    setRequestedOn(new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }));
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#f5f5f5] min-h-0 overflow-y-auto p-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <button onClick={onBack} className="flex items-center gap-1.5 text-[#0d7a6e] text-[12px] mb-4 hover:underline w-fit">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="#0D7A6E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Orders
      </button>

      <div className="mb-6">
        <h1 className="text-[24px] font-medium text-[#1f2937]">Requested Delivery Date</h1>
        <p className="text-[14px] text-[#6b7280] mt-1">
          {order.orderNo} · {order.jobName} — {order.description}
        </p>
      </div>

      <div className="max-w-[560px] bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-6">
        {submitted ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#fe9a00]" />
              <h2 className="text-[16px] font-medium text-[#1f2937]">Request Pending</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-medium text-white bg-[#fe9a00]">
                Pending
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="text-[12px] text-[#6b7280]">Original Date</p>
                <p className="text-[14px] text-[#1f2937] mt-0.5">{order.scheduledDeliveryDate ?? 'Not yet scheduled'}</p>
              </div>
              <div>
                <p className="text-[12px] text-[#6b7280]">Requested Delivery Date</p>
                <p className="text-[14px] font-medium text-[#0d7a6e] mt-0.5">{requestedDate}</p>
              </div>
              <div>
                <p className="text-[12px] text-[#6b7280]">Requested By</p>
                <p className="text-[14px] text-[#1f2937] mt-0.5">{requestedBy}</p>
              </div>
              <div>
                <p className="text-[12px] text-[#6b7280]">Requested On</p>
                <p className="text-[14px] text-[#1f2937] mt-0.5">{requestedOn}</p>
              </div>
            </div>

            <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-4">
              <p className="text-[13px] text-[#374151]">
                This request does not change the order yet. Your fabricator's scheduler has been alerted and will
                review it. Approval or denial will come back to you as a message.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[13px] text-[#6b7280] mb-1">Original Date</p>
              <p className="text-[14px] text-[#1f2937]">{order.scheduledDeliveryDate ?? 'Not yet scheduled'}</p>
            </div>

            <div>
              <label className="block text-[14px] text-[#374151] mb-1.5">Requested Delivery Date</label>
              <input
                type="date"
                className="w-full border border-[#d1d5db] rounded-md px-3 py-2 text-[14px] text-[#374151] bg-white outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e]"
                value={requestedDate}
                onChange={(e) => setRequestedDate(e.target.value)}
              />
              <p className="text-[12px] text-[#9ca3af] mt-1">The date material is needed on site.</p>
            </div>

            <div>
              <label className="block text-[14px] text-[#374151] mb-1.5">Requested By</label>
              <input
                className="w-full border border-[#d1d5db] rounded-md px-3 py-2 text-[14px] text-[#374151] bg-white outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e]"
                value={requestedBy}
                onChange={(e) => setRequestedBy(e.target.value)}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!requestedDate}
              className="w-fit px-5 py-2 rounded-full text-[14px] text-white bg-[#0d7a6e] border border-[#0d7a6e] hover:bg-[#0b6b60] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Submit Request
            </button>
            <p className="text-[12px] italic text-[#9ca3af]">
              This does not change the order. Your fabricator's scheduler will be alerted and will respond with a
              message.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
