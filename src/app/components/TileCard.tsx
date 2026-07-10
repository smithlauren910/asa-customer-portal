import { type ReactNode } from 'react';

interface TileCardProps {
  title: string;
  children: ReactNode;
  variant?: 'default' | 'alert' | 'disabled';
  onClick?: () => void;
  disabledNote?: string;
}

export function TileCard({ title, children, variant = 'default', onClick, disabledNote }: TileCardProps) {
  const isDisabled = variant === 'disabled';
  return (
    <div
      className={`bg-white rounded-lg border flex flex-col p-5 min-h-[120px] flex-1 ${
        variant === 'alert' ? 'border-[#c62828]' : 'border-[#e5e7eb]'
      } shadow-sm ${isDisabled ? 'opacity-50' : ''} ${onClick && !isDisabled ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={isDisabled ? undefined : onClick}
      title={isDisabled ? disabledNote : undefined}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <p className={`text-[11px] font-semibold uppercase tracking-wide mb-3 ${variant === 'alert' ? 'text-[#c62828]' : 'text-[#6b7280]'}`}>
        {title}
      </p>
      {isDisabled ? (
        <p className="text-[12px] text-[#9ca3af] italic">{disabledNote ?? 'Not available'}</p>
      ) : (
        children
      )}
    </div>
  );
}
