"use client";
import React from "react";

export default function Pagination({ className, activePage, onPageChange, totalPages }) {
  const getPageNumbers = () => {
    const maxVisiblePages = 5; // Total de páginas visíveis (central + 2 antes + 2 depois)
    let startPage = Math.max(activePage - 2, 1);
    let endPage = Math.min(activePage + 2, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      if (activePage < totalPages / 2) {
        endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
      } else {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={className ? className : "pagination justify-content-center"}>
      {/* Botão Página Anterior */}
      <a
        onClick={() => activePage > 1 && onPageChange(activePage - 1)}
        className={activePage === 1 ? "disabled" : ""}
      >
        <i className="mi-chevron-left" />
        <span className="visually-hidden">Página anterior</span>
      </a>

      {/* Primeira Página */}
      {pageNumbers[0] > 1 && (
        <>
          <a onClick={() => onPageChange(1)} className={activePage === 1 ? "active" : ""}>
            1
          </a>
          {pageNumbers[0] > 2 && <span className="pagination-ellipsis">...</span>}
        </>
      )}

      {/* Botões de Páginas Dinâmicas */}
      {pageNumbers.map((page) => (
        <a
          key={page}
          onClick={() => onPageChange(page)}
          className={activePage === page ? "active" : ""}
        >
          {page}
        </a>
      ))}

      {/* Última Página */}
      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="pagination-ellipsis">...</span>
          )}
          <a
            onClick={() => onPageChange(totalPages)}
            className={activePage === totalPages ? "active" : ""}
          >
            {totalPages}
          </a>
        </>
      )}

      {/* Botão Próxima Página */}
      <a
        onClick={() => activePage < totalPages && onPageChange(activePage + 1)}
        className={activePage === totalPages ? "disabled" : ""}
      >
        <i className="mi-chevron-right" />
        <span className="visually-hidden">Próxima página</span>
      </a>
    </div>
  );
}
