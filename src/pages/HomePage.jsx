import { useRef, useState } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [erroName,setErrorName] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(inputTrainer.current.value.trim() === ''){
      setErrorName(true)
    }else{
      setErrorName(false)
      dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
      navigate('/pokedex')
    }
  }
  return (
    <div className="home">
        <div className="home__container">
          <h1 className="home__title"><img className="home__title_img" src="/pokedexTitle.png" alt="Pokedex" /></h1>  
          <h2 className="home__greeting">Hi Trainer!</h2>
          <p className="home__introduction">To start, please, enter your trainer nickname</p>
          <form className="home__form" onSubmit={handleSubmit}>
              <div className="home_input_container">
                  <input className={`home__input_name ${erroName ? "input_error" : ""}`} placeholder="your nickname" type="text" maxLength={18} ref={inputTrainer} />
                {erroName && (
                  <span className="erroName_message">Nickname is required</span>
                )}
              </div>
              <button className="home__btn_start">Start</button>
          </form>
        </div>
    </div>
  )
}

export default HomePage