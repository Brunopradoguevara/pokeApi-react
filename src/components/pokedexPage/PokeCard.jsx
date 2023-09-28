import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({url}) => {

 const [pokemon,getPokemon] = useFetch(url)

  const navigate = useNavigate()

  useEffect(()=>{

    getPokemon()

  },[])

  const handleNavigate = () =>{
    navigate(`/pokedex/${pokemon.id}`)
  }
  return (
    <article className={`pokeCard ${pokemon?.types[0].type.name}-border`} onClick={handleNavigate}>
      <header className={`pokeCard__header ${pokemon?.types[0].type.name}-gradient`}>
        <img className="pokeCard__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="pokeCard__pokemon_information">
        <h3 className="pokeCard__pokemon_name">{pokemon?.name}</h3>
        <ul className="pokeCard__pokemon_types">
          {
            pokemon?.types.map(typeInfo => (
              <li  className="pokeCard__pokemon_type"
                   key={typeInfo.type.url}>
                {typeInfo.type.name}
              </li>
            ))
          }
        </ul>
        <p className="pokeCard__type">Type</p>
        <hr  className="pokeCard__hr" />
        <ul  className="pokeCard__pokemon_stats">
          {
            pokemon?.stats.map(statInfo => (
              <li key={statInfo.stat.url}
                  className="pokeCard__pokemon_stat">
                <span className="pokeCard__pokemon_stat_name">{statInfo.stat.name}</span>
                <span className="pokeCard__pokemon_stat_value">{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard