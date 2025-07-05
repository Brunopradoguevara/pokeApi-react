import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokedexIdPage.css'
import '../colorsType.css';
const PokedexIdPage = () => {

  const {id} = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon,getPokemon] = useFetch(url)

    useEffect(()=>{
        getPokemon()  
    },[id])
    
  return (
    <section className="pokedexId__container">
      <article className="pokedexId">
        <header className={`pokedexId__header ${pokemon?.types[0].type.name}-gradient`}>
            <img className="pokedexId__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
          </header>
          <div className="pokedexId__information_container">
              <div className="pokedexId__id_container">
                <h1 className="pokedexId__id" >#{id}</h1>
              </div>
            <div className="pokedexId__name_container">
              <hr className="pokedexId__hr"/>
              <h2 className="pokedexId__name" >{pokemon?.name}</h2>
              <hr className="pokedexId__hr"/>
            </div>
              <ul className="pokedexId__description">
                <li className="pokedexId__description_container">
                  <span className="pokedexId__description_title">Weight</span>
                  <span className="pokedexId__description_value">{pokemon?.weight}</span>
                </li>
                <li className="pokedexId__description_container">
                  <span className="pokedexId__description_title">Height</span>
                  <span className="pokedexId__description_value">{pokemon?.height}</span>
                </li>
              </ul> 
              <div className="pokedexId__container_type_abilities">
                <div className="pokedexId__type_abilities_container">
                  <h3 className="pokedexId__type_abilities_title">Type</h3>
                  <ul className="pokedexId__type_ability">
                    {
                      pokemon?.types.map(typeInfo => (
                        <li 
                            key={typeInfo.type.url}
                            className={`pokedexId__type ${typeInfo.type.name}-gradient`}>
                          {typeInfo.type.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="pokedexId__type_abilities_container">
                  <h3 className="pokedexId__type_abilities_title">Abilities</h3>
                  <ul className="pokedexId__type_ability">
                    {
                      pokemon?.abilities.map(abilitiesInfo => (
                        <li 
                            key={abilitiesInfo.ability.url}
                            className={`pokedexId__ability ${pokemon?.types[0].type.name}-gradient`}>
                          {abilitiesInfo.ability.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            <div className="pokedexId__stats_container">
              <div className="pokedexId__stats_title_container">
                <h3 className="pokedexId__stats_title">Stats</h3>
                <hr className="pokedexId__stats_hr"/>
              </div>
              {
                
                pokemon?.stats.map(statInfo => (
                  <div key={statInfo.stat.url}
                      className="pokedexId__stats">
                    <div className="pokedexId__stat_container">
                      <span className="pokedexId__stat_title">{statInfo.stat.name}</span>
                      <span className="pokedexId__stat_value">{statInfo.base_stat}/150</span>
                    </div>
                    <div className="pokedexId__bar">
                      <div className="pokedexId__bar_value"  style={{ width: `${(statInfo.base_stat / 150) * 100}%`}}></div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </article>
      <article className="pokedexId__movements_card">
        <div className="pokedexId__movements_container">
            <div className="pokedexId__movements_title_container">
                <h3 className="pokedexId__movements_title">Movements</h3>
                <hr className="pokedexId__movements_title_hr"/>
            </div>
            <div className="pokedexId__movements">
              <ul className="pokedexId__movements_list">
                {
                  pokemon?.moves.map(moves => (
                    <li 
                        key={moves.move.url}
                        className="pokedexId__movement_item">
                      {moves.move.name}
                    </li>
                  ))
                } 
              </ul>
            </div>
        </div>
      </article>
    </section>
  )
}

export default PokedexIdPage