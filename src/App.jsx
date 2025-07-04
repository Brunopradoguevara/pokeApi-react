
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokemonNotFoundPage from './pages/PokemonNotFoundPage'

function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokemonNotFound' element={<PokemonNotFoundPage/>}/>
          <Route path='/pokedex/:id' element={<PokedexIdPage/>}/>
        </Route>
     </Routes> 
    </div>
  )
}

export default App
