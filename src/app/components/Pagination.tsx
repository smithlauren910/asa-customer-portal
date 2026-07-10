interface PaginationProps {
  page: number;
  pageSize: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pageSizeOptions?: number[];
}

function getPageNumbers(page: number, totalPages: number): (number | '...')[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
  const result: (number | '...')[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push('...');
    result.push(p);
  });
  return result;
}

export function Pagination({
  page,
  pageSize,
  totalResults,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50],
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));
  const start = totalResults === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalResults);

  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#e5e7eb]">
      <div className="flex items-center gap-3">
        <select
          className="border border-[#d1d5db] rounded px-2 py-1 text-[12px] text-[#374151] outline-none focus:border-[#0d7a6e]"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </select>

        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="px-2.5 py-1 rounded text-[12px] text-[#374151] border border-[#d1d5db] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0d7a6e] transition-colors"
        >
          Previous
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers(page, totalPages).map((p, i) =>
            p === '...' ? (
              <span key={`ellipsis-${i}`} className="px-1 text-[12px] text-[#9ca3af]">
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                className={`w-6 h-6 rounded text-[12px] transition-colors ${
                  p === page
                    ? 'bg-[#0d7a6e] text-white font-medium'
                    : 'text-[#374151] hover:bg-[#f3f4f6]'
                }`}
              >
                {p}
              </button>
            )
          )}
        </div>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="px-2.5 py-1 rounded text-[12px] text-[#374151] border border-[#d1d5db] disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0d7a6e] transition-colors"
        >
          Next
        </button>
      </div>

      <span className="text-[13px] text-[#6b7280]">
        {start} - {end} of {totalResults} Result{totalResults === 1 ? '' : 's'}
      </span>
    </div>
  );
}
