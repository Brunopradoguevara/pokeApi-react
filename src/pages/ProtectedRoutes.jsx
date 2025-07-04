import { useSelector } from "react-redux"
import { Navigate, Outlet} from "react-router-dom"
import Header from "../components/pokedexPage/Header"


const ProtectedRoutes = () => {
    const trainer = useSelector(store => store.trainer)
    if(trainer.length > 0){
        return(
            <>
                <Header/>
                <Outlet/>
            </>
        )
    }else{
        return <Navigate to='/' />
    }
  
}

export default ProtectedRoutes