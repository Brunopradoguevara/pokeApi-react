
const Pagination = ({setPageNumber,pageNumber,numberLastPageFilter}) => {
    
    const handleNextPage = (e) =>{
        e.preventDefault()
        if(pageNumber < numberLastPageFilter){
          setPageNumber(pageNumber + 1) 
        }else{
          setPageNumber(numberLastPageFilter)
        }
    }
    const handlePreviousPage = (e) =>{
        e.preventDefault()
        if(pageNumber <= 1){
          setPageNumber(1) 
        }else{
          setPageNumber(pageNumber - 1)
        }
    }
    const handleInputChange = (e) =>{
      e.preventDefault()
      if(+e.target.value <= numberLastPageFilter && +e.target.value >= 1){
        setPageNumber(+e.target.value)
      }
     /*  setPageNumber(+e.target.value) */
    }

    
  return (
    <div className="pagination">
        <button className="pagination__btn--Previous" onClick={handlePreviousPage}>Previous</button>
        <form className="pagination__form">
            <input className="pagination__input" type="text" value={pageNumber} onChange={handleInputChange}/>
        </form>
        <span className="pagination__separation_mark">/</span>
        <span className="pagination__numberOfPages">{numberLastPageFilter}</span>
        <button className="pagination__btn--next" onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default Pagination