interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusConfig: Record<string, { bg: string; label: string }> = {
  'action-required': { bg: '#c62828', label: 'Action Required' },
  'confirmed': { bg: '#0d7a6e', label: 'Confirmed' },
  'pending': { bg: '#fe9a00', label: 'Pending' },
  'in-transit': { bg: '#2d6cb8', label: 'In Transit' },
  'shipped': { bg: '#2d6cb8', label: 'Shipped' },
  'scheduled': { bg: '#fe9a00', label: 'Scheduled' },
  'delivered': { bg: '#0d7a6e', label: 'Delivered' },
  'open': { bg: '#6b7280', label: 'Open' },
  'locked': { bg: '#9ca3af', label: 'Locked' },
  'active': { bg: '#0d7a6e', label: 'Active' },
  'blocked': { bg: '#c62828', label: 'Blocked' },
  'upcoming': { bg: '#fe9a00', label: 'Upcoming' },
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] ?? { bg: '#6b7280', label: status };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[11px] font-medium text-white whitespace-nowrap ${className}`}
      style={{ backgroundColor: config.bg, fontFamily: 'Inter, sans-serif' }}
    >
      {config.label}
    </span>
  );
}
