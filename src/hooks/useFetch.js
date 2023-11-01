import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)

  const getApi = () =>{
    axios.get(url)
    .then(res=> {
      setHasError(false)
      setInfoApi(res.data)
    })
    .catch(err => {
      setHasError(true)
      console.log(err)
    })
  }

  const getTypeApi = (urlType) =>{
    axios.get(urlType)
    .then(res=> {
      const obj = {
        results: res.data.pokemon.map(e => e.pokemon)
      }
      setInfoApi(obj)
    })
    .catch(err => console.log(err))
  }

  return [infoApi,getApi,getTypeApi,hasError]

}

export default useFetch