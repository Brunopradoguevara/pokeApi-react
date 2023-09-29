import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import SelectType from "../components/pokedexPage/SelectType"
import PokeCard from "../components/pokedexPage/PokeCard"
import Pagination from "../components/pokedexPage/Pagination"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('all pokemon')
  console.log(typeSelected)

  /*  */
  const [limit, setLimit] = useState(20)
  const [pageNumber, setPageNumber] = useState(1)
  const starOfSeparation = limit * (pageNumber - 1)
  const [lastPokemonNumber, setLastPokemonNumber] = useState(1292)
  /*  */

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  /* const url = 'https://pokeapi.co/api/v2/pokemon?offset=00&limit=20' */
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${starOfSeparation}&limit=${limit}`
  const AllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1292'
  const  [pokemons,getPokemons,getTypePokemon] = useFetch(url)
  const  [Allpokemons,getAllPokemons] = useFetch(AllPokemonUrl)


  useEffect(()=>{
    if(inputValue !== '' && typeSelected === 'all pokemon'){
      getAllPokemons()
      console.log("getAllPokemon")
      /* setLastPokemonNumber(pokeSearch?.length) */
      setLastPokemonNumber(1)
      console.log("numero de pokemon que hay: "+ lastPokemonNumber)

    }else if(typeSelected === 'all pokemon'){
      getPokemons()
      console.log("getPokemon")
      setLastPokemonNumber(1292)
    }else{
      getTypePokemon(typeSelected)
      setLastPokemonNumber(1)
    }

  },[typeSelected,url,inputValue,lastPokemonNumber])



  const handleSearch = (e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setPageNumber(1)
  }
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  const pokeSearch = Allpokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <section className="pokedex">
       <div className="pokedex__container">
        <p className="pokedex__welcome"> <span className="pokedex__greeting">Hi {trainer},</span> here you can find your favorite pokemon</p>
          <div className="pokedex__search_pokemon">
            <form className="pokedex__form" onSubmit={handleSearch}>
              <input className="pokedex__input_pokemon" placeholder="Search pokemon" type="text" ref={inputSearch}/>
              <button className="pokedex__btn">Search</button>
            </form>
            <SelectType setTypeSelected={setTypeSelected}/> 
          </div>
          <div className="pokeCards__container">
            {
              inputValue !== '' && typeSelected === 'all pokemon'
                ?(
                  pokeSearch?.map(poke => (
                    <PokeCard
                      key={poke.url}
                      url={poke.url}
                    />
                  ))
                )
                :(
                  pokeFiltered?.map(poke => (
                    <PokeCard
                      key={poke.url}
                      url={poke.url}
                    />
                  ))
                )
            }
            {console.log("pokeSearch tiene: " + pokeSearch?.length)}
          </div>
       </div>
       <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} lastPokemonNumber={lastPokemonNumber}/>
    </section>
  )
}

export default PokedexPage