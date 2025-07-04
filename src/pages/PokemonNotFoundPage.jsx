import './styles/PokemonNotFound.css'
const PokemonNotFound = () => {
  return (
    <section className="pokemonNotFound">
        <h2 className="pokemonNotFound__title">Pokemon not found</h2>
        <div className="pokemonNotFound__img_container">
         <img className="pokemonNotFound__img" src="/psyduck.png" alt="" />
        </div>
    </section>
  )
}

export default PokemonNotFound