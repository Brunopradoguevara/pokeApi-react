import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const trainer = useSelector(store => store.trainer)
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }
  return (
    <div className="home">
        <div className="home__container">
          <h1 className="home__title"><img className="home__title_img" src="/pokedexTitle.png" alt="Pokedex" /></h1>  
          <h2 className="home__greeting">Hi Trainer!</h2>
          <p className="home__introduction">To start, please, enter your trainer nickname</p>
          <form className="home__form" onSubmit={handleSubmit}>
              <input className="home__input_name" placeholder="your nickname" type="text" ref={inputTrainer} />
              <button className="home__btn_start">Start</button>
          </form>
        </div>
    </div>
  )
}

export default HomePage