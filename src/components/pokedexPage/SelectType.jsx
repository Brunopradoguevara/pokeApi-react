import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setTypeSelected}) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [types,getTypes] = useFetch(url)
    useEffect(()=>{
        getTypes()
    },[])
    console.log(types)
    const handleChange = (e) =>{
        setTypeSelected(e.target.value) 
    }

  return (
    <div>
        <select className="selectType" onChange={handleChange}>
            <option value="all pokemon">All pokemon</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectType