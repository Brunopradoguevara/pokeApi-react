import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({setTypeSelected,setPageNumber}) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [types,getTypes] = useFetch(url)
    useEffect(()=>{
        getTypes()
    },[])
    const handleChange = (e) =>{
        setTypeSelected(e.target.value)
        setPageNumber(1)
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