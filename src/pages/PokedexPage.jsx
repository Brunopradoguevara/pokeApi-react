import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexPage/pokeCard"
import SelectType from "../components/pokedexPage/SelectType"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('all pokemon')
  console.log(typeSelected)

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=00&limit=100'
  const  [pokemons,getPokemons,getTypePokemon] = useFetch(url)
  useEffect(()=>{
    if(typeSelected === 'all pokemon'){
      getPokemons()
    }else{
      getTypePokemon(typeSelected)
    }

  },[typeSelected])

  const handleSearch = (e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

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
              pokeFiltered?.map(poke => (
                <PokeCard
                  key={poke.url}
                  url={poke.url}
                />
              ))
            }
          </div>
       </div>
    </section>
  )
}

export default PokedexPage