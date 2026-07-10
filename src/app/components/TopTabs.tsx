import type { Fabricator } from '../data/fabricators';

export type SectionPage = 'orders' | 'shipments' | 'invoices' | 'messages';

interface TopTabsProps {
  fabricator: Fabricator;
  activePage: string;
  onNavigate: (page: SectionPage) => void;
  unreadMessageCount: number;
}

const TABS: { id: SectionPage; label: string; moduleKey: 'shipments' | 'invoices' | null }[] = [
  { id: 'orders', label: 'Orders', moduleKey: null },
  { id: 'shipments', label: 'Shipments', moduleKey: 'shipments' },
  { id: 'invoices', label: 'Invoices', moduleKey: 'invoices' },
  { id: 'messages', label: 'Messages', moduleKey: null },
];

export function TopTabs({ fabricator, activePage, onNavigate, unreadMessageCount }: TopTabsProps) {
  return (
    <div className="bg-white border-b border-[#e5e7eb] px-6 flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
      {TABS.map((tab) => {
        const enabled = tab.moduleKey ? fabricator.modules[tab.moduleKey] : true;
        const isActive = activePage === tab.id;
        if (!enabled) {
          return (
            <span
              key={tab.id}
              title={`${fabricator.name} doesn't have the ${tab.label} module`}
              className="px-4 py-3 text-[14px] text-[#c8c8c8] cursor-not-allowed select-none"
            >
              {tab.label}
            </span>
          );
        }
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`relative px-4 py-3 text-[14px] transition-colors ${
              isActive ? 'text-[#0d7a6e] font-medium' : 'text-[#1a1a1a] hover:text-[#0d7a6e]'
            }`}
          >
            {tab.label}
            {tab.id === 'messages' && unreadMessageCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-[#c62828] text-white text-[10px] font-medium align-middle">
                {unreadMessageCount}
              </span>
            )}
            {isActive && <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#0d7a6e]" />}
          </button>
        );
      })}
    </div>
  );
}
