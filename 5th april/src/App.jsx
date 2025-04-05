import { useState } from 'react'
import useFetch from '/src/useFetch.jsx';
import './App.css'


export default function App (){
  const [showData, setData] = useState(false)

  const {data} = useFetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  console.log(data)

  return(
       <div>
          <h2>Programming API</h2>
          <button onClick = {() => setData(true)}>Get Programming API</button>
          {showData &&(
            <div>
            {data ? <p>{JSON.stringify(data.joke)}</p>:<p>Unable to fetch the data </p> }

            </div>
          )}

        </div>
  )
}
