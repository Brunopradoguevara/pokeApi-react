import { useNavigate } from "react-router-dom"
import './styles/Header.css'
const Header = () => {
  
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(-1)
  }
  return (
    <header className="header">
      <div className="header__red">
        <img className="header__pokedex_title" src="/pokedexTitle.png" alt="" />
        <img className="header__pokeball" src="/pokebola.png" alt="" />
      </div>
      <div className="header__black">
      <i onClick={handleClick} className='bx bx-left-arrow-circle'></i>
      </div>
    </header>
  )
}

export default Header