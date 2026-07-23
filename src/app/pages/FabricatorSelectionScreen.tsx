import { useState } from 'react';
import imgLogo from "figma:asset/d6c973a49b3a11fd6b1f8226d69743e93a3fd1d8.png";
import { FABRICATORS, type Fabricator } from '../data/fabricators';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

interface FabricatorSelectionScreenProps {
  onSelectFabricator: (fabricatorId: string) => void;
}

export function FabricatorSelectionScreen({ onSelectFabricator }: FabricatorSelectionScreenProps) {
  const [addOpen, setAddOpen] = useState(false);
  const [connectionCode, setConnectionCode] = useState('');

  const handleAddSubmit = () => {
    // Demo only — no real backend to validate the connection code against.
    setAddOpen(false);
    setConnectionCode('');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#f5f5f5] pt-12 sm:pt-20 px-4 sm:px-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-[136px] h-[76px] relative overflow-hidden mb-3">
        <img alt="aSa Software" className="absolute h-full left-0 top-0 max-w-none" style={{ width: '321.1%', filter: 'invert(1)' }} src={imgLogo} />
      </div>
      <p className="text-[16px] font-medium text-[#6b7280] mb-8">Customer Portal</p>

      <h1 className="text-[24px] font-medium text-[#1a1a1a] mb-1">Choose a fabricator</h1>
      <p className="text-[14px] text-[#6b7280] mb-10">Select which fabricator's portal you'd like to open.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[900px]">
        {FABRICATORS.map((fab) => (
          <FabricatorCard key={fab.id} fabricator={fab} onSelect={() => onSelectFabricator(fab.id)} />
        ))}

        <button
          onClick={() => setAddOpen(true)}
          className="border border-dashed border-[#d0d0d0] rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-[#6b7280] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors min-h-[160px]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[14px] font-medium">Add fabricator</span>
        </button>
      </div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Connect a fabricator</DialogTitle>
            <DialogDescription>
              Enter the connection code your fabricator issued you to link their portal to your account.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-1.5 py-2">
            <label className="text-[13px] font-medium text-[#374151]">Connection code</label>
            <input
              autoFocus
              value={connectionCode}
              onChange={(e) => setConnectionCode(e.target.value)}
              placeholder="e.g., FAB-XXXX-XXXX"
              className="border border-[#d1d5db] rounded-lg px-3 py-2.5 text-[14px] outline-none focus:border-[#0d7a6e] focus:ring-1 focus:ring-[#0d7a6e]"
            />
          </div>
          <DialogFooter>
            <button
              onClick={() => setAddOpen(false)}
              className="px-4 py-2 rounded-full text-[14px] text-[#1a1a1a] border border-[#d0d0d0] hover:border-[#0d7a6e] hover:text-[#0d7a6e] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddSubmit}
              disabled={!connectionCode.trim()}
              className="px-5 py-2 rounded-full text-[14px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Connect
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function FabricatorCard({ fabricator, onSelect }: { fabricator: Fabricator; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="bg-white border border-[#e5e7eb] rounded-lg p-6 flex flex-col gap-4 text-left shadow-sm hover:border-[#0d7a6e] hover:shadow-md transition-all min-h-[160px]"
    >
      <div className="w-11 h-11 rounded-full bg-[#095c53] text-white flex items-center justify-center text-[15px] font-semibold shrink-0">
        {fabricator.name.slice(0, 1)}
      </div>
      <div>
        <h3 className="text-[16px] font-medium text-[#1a1a1a]">{fabricator.name}</h3>
        <div className="flex gap-1.5 mt-2">
          <ModuleBadge label="Orders" available />
          <ModuleBadge label="Shipments" available={fabricator.modules.shipments} />
          <ModuleBadge label="Invoices" available={fabricator.modules.invoices} />
        </div>
      </div>
    </button>
  );
}

function ModuleBadge({ label, available }: { label: string; available: boolean }) {
  return (
    <span
      className="px-2 py-0.5 rounded-sm text-[10px] font-medium"
      style={{
        backgroundColor: available ? '#e6f4f2' : '#f3f4f6',
        color: available ? '#095c53' : '#9ca3af',
      }}
    >
      {label}
    </span>
  );
}
