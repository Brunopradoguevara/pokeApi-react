import { useEffect, useState } from "react"

const Pagination = ({setPageNumber,pageNumber,lastPokemonNumber}) => {
    const [limit, setLimit] = useState(20)
    /* const [pageNumber, setPageNumber] = useState(1) */
    /* const lastPage= Math.ceil(lastPokemonNumber / limit) */
    const [lastPage, setlastPage] = useState(Math.ceil(lastPokemonNumber / limit))
    useEffect(()=>{
      setlastPage(Math.ceil(+lastPokemonNumber / limit))
    },[lastPokemonNumber])

    const handleNextPage = (e) =>{
        e.preventDefault()
        pageNumber < lastPage
         ? setPageNumber(pageNumber + 1) 
         : setPageNumber(lastPage)
    }
    const handlePreviousPage = (e) =>{
        e.preventDefault()
        pageNumber <= 1
         ? setPageNumber(1) 
         : setPageNumber(pageNumber - 1)
    }
    const handleInputChange = (e) =>{
      e.preventDefault()
      if(+e.target.value <= lastPage && +e.target.value >= 1){
        setPageNumber(+e.target.value)
      }
    }

    
  return (
    <div className="pagination">
        <button className="pagination__btn--Previous" onClick={handlePreviousPage}>Previous</button>
        <form className="pagination__form">
            <input className="pagination__input" type="text" value={pageNumber} onChange={handleInputChange}/>
        </form>
        <span className="pagination__separation_mark">/</span>
        <span className="pagination__numberOfPages">{lastPage ? lastPage : 1}</span>
        <button className="pagination__btn--next" onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default Pagination