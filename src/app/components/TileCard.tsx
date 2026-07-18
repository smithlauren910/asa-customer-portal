import { type ReactNode } from 'react';
import type { IconComponent } from './icons/TileIcons';

interface TileCardProps {
  title: string;
  icon?: IconComponent;
  children: ReactNode;
  variant?: 'default' | 'alert' | 'disabled';
  onClick?: () => void;
  disabledNote?: string;
}

export function TileCard({ title, icon: Icon, children, variant = 'default', onClick, disabledNote }: TileCardProps) {
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
      <div className="flex items-center gap-2 mb-3">
        {Icon && (
          <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
            <Icon size={13} className={variant === 'alert' ? 'text-[#c62828]' : 'text-[#6b7280]'} strokeWidth={2} />
          </span>
        )}
        <p className={`text-[11px] font-semibold uppercase tracking-wide leading-none ${variant === 'alert' ? 'text-[#c62828]' : 'text-[#6b7280]'}`}>
          {title}
        </p>
      </div>
      {isDisabled ? (
        <p className="text-[12px] text-[#9ca3af] italic">{disabledNote ?? 'Not available'}</p>
      ) : (
        children
      )}
    </div>
  );
}
