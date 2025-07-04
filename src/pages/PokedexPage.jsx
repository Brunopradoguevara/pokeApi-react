import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import SelectType from "../components/pokedexPage/SelectType"
import PokeCard from "../components/pokedexPage/PokeCard"
import Pagination from "../components/pokedexPage/Pagination"
import getArraySplit from "../utils/getArraySplit"
import { useNavigate } from "react-router-dom"
import './styles/PokedexPage.css'
const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('all pokemon')


  const [limit, setLimit] = useState(20)
  const [pageNumber, setPageNumber] = useState(1)
  const [numberLastPageFilter, setNumberLastPageFilter] = useState(null)

  const navigate = useNavigate()
  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const AllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1292'
  const  [Allpokemons,getAllPokemons,getTypePokemon] = useFetch(AllPokemonUrl)

  const pokeFiltered = Allpokemons?.results.filter(poke => poke.name.includes(inputValue))
  const pokeFilteredSplit = getArraySplit(pokeFiltered, limit);

  useEffect(()=>{
    if(typeSelected === 'all pokemon'){
      getAllPokemons()
    }else{
      getTypePokemon(typeSelected)
    }
    
  },[typeSelected,inputValue])

  useEffect(()=>{
    if(pokeFilteredSplit){
      setNumberLastPageFilter(pokeFilteredSplit?.length)
      if(pokeFiltered?.length === 0){
        navigate('/pokemonNotFound')
      }
    }
  },[pokeFilteredSplit])


  const handleSearch = (e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setPageNumber(1)
  }

  return (
      <section className="pokedex">
       <div className="pokedex__container">
        <p className="pokedex__welcome"> <span className="pokedex__greeting">Hi {trainer},</span> here you can find your favorite pokemon</p>
          <div className="pokedex__search_pokemon">
            <form className="pokedex__form" onSubmit={handleSearch}>
              <input className="pokedex__input_pokemon" placeholder="Search pokemon" type="text" ref={inputSearch}/>
              <button className="pokedex__btn">Search</button>
            </form>
            <SelectType 
            setTypeSelected={setTypeSelected}
            setPageNumber={setPageNumber}/> 
          </div>
          <div className="pokeCards__container">
            {
                  pokeFilteredSplit[pageNumber - 1]?.map(poke => (
                    <PokeCard
                      key={poke.url}
                      url={poke.url}  
                    />
                  ))
            }
          </div>
       </div>
       <Pagination 
       setPageNumber={setPageNumber} 
       pageNumber={pageNumber}
       numberLastPageFilter={numberLastPageFilter}/>
    </section>
  )
}

export default PokedexPage