"use client";

// Paginação no visual novo (mesma lógica do Pagination antigo: até 5 páginas visíveis, primeira e última)
export default function Pager({ activePage, onPageChange, totalPages, locale }) {
  if (totalPages <= 1) return null;
  const en = locale === "en";
  let start = Math.max(activePage - 2, 1);
  let end = Math.min(activePage + 2, totalPages);
  if (end - start < 4) {
    if (activePage < totalPages / 2) end = Math.min(start + 4, totalPages);
    else start = Math.max(end - 4, 1);
  }
  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  const Btn = ({ page, children, label, disabled }) => (
    <button
      type="button"
      className={page === activePage && !label ? "gold" : "clear"}
      aria-current={page === activePage && !label ? "page" : undefined}
      aria-label={label}
      disabled={disabled}
      onClick={() => onPageChange(page)}
    >
      {children}
    </button>
  );

  return (
    <nav className="pager" aria-label={en ? "Pagination" : "Paginação"}>
      <Btn page={activePage - 1} label={en ? "Previous page" : "Página anterior"} disabled={activePage === 1}>‹</Btn>
      {pages[0] > 1 && (
        <>
          <Btn page={1}>1</Btn>
          {pages[0] > 2 && <span aria-hidden="true">…</span>}
        </>
      )}
      {pages.map((p) => (
        <Btn key={p} page={p}>{p}</Btn>
      ))}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && <span aria-hidden="true">…</span>}
          <Btn page={totalPages}>{totalPages}</Btn>
        </>
      )}
      <Btn page={activePage + 1} label={en ? "Next page" : "Próxima página"} disabled={activePage === totalPages}>›</Btn>
    </nav>
  );
}
