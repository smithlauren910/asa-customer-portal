interface BackButtonProps {
  label: string;
  onClick: () => void;
}

export function BackButton({ label, onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#0d7a6e] text-[16px] font-medium w-fit hover:underline mb-4 shrink-0"
    >
      <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="#0D7A6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  );
}
