
import {useState, useEffect} from 'react'





const useFetch = (url,intialData) =>{
  const[data, setData] = useState(intialData)
  useEffect(() =>{
    fetch (url)

      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  },[url])
  return{data}
}

export default useFetch;