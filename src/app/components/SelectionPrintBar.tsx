import type { ReactNode } from 'react';

interface SelectionPrintBarProps {
  selectedCount: number;
  totalCount: number;
  allSelected: boolean;
  onToggleSelectAll: () => void;
  onPrint: () => void;
  children?: ReactNode;
}

export function SelectionPrintBar({
  selectedCount,
  totalCount,
  allSelected,
  onToggleSelectAll,
  onPrint,
  children,
}: SelectionPrintBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <label className="flex items-center gap-2 text-[13px] text-[#374151] cursor-pointer select-none">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={onToggleSelectAll}
          disabled={totalCount === 0}
          className="w-4 h-4 accent-[#0d7a6e]"
        />
        Select all {totalCount > 0 && `(${totalCount})`}
      </label>

      <div className="flex items-center gap-2">
        {children}
        <button
          onClick={onPrint}
          disabled={selectedCount === 0}
          className="px-4 py-1.5 rounded-full text-[13px] font-medium text-white bg-[#0d7a6e] hover:bg-[#0b6b60] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Print{selectedCount > 0 ? ` (${selectedCount})` : ''}
        </button>
      </div>
    </div>
  );
}
