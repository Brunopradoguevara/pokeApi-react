import { useState } from 'react'
import './styles/Pagination.css'
const Pagination = ({setPageNumber,pageNumber,numberLastPageFilter}) => {

    const pageBlockSize = 5
    const currentBlock = Math.floor((pageNumber - 1) / pageBlockSize);
    const startPage = currentBlock * pageBlockSize + 1;
    const endPage = Math.min(startPage + pageBlockSize - 1, numberLastPageFilter);

     const handlePageClick = (page) => {
        setPageNumber(page);
      }
      

    const handleNextBlock = (e) =>{
        const nextStartPage = startPage + pageBlockSize;
        if (nextStartPage <= numberLastPageFilter) {
          setPageNumber(nextStartPage);
        }
    }
    const handlePrevBlock = (e) =>{
      const prevStartPage = startPage - pageBlockSize;
      if (prevStartPage >= 1) {
        setPageNumber(prevStartPage)
      }
    }

    
  return (
    <div className="pagination">
      {startPage > 1 && (
        <button className="pagination__btn--Previous" onClick={handlePrevBlock}>
          &laquo;
        </button>
      )}

      {[...Array(endPage - startPage + 1)].map((_, i) => {
        const page = startPage + i;
        return (
          <button
            key={page}
            className={`pagination__btn_page_number ${page === pageNumber ? 'active' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        );
      })}

      {endPage < numberLastPageFilter && (
        <button className="pagination__btn--next" onClick={handleNextBlock}>
          &raquo;
        </button>
      )}
    </div>
  )
}

export default Pagination