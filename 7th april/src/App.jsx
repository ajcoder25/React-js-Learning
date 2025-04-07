import { useState } from 'react'
import useFetch from './useFetch'


import './App.css'



export default function App (){

  const {data, loading,error, fetchData} = useFetch("https://randomuser.me/api/")
  console.log(data)
  return(
    <div className = 'container mt-5'>
      <h2>Random User API</h2>
      <button className = 'btn btn-info' onClick = {fetchData}>Get Random User</button>

         <div >
         {loading && <p>...Loading</p>}
          {error && <p>Error While fetching the data</p>}

            {data?.results?.length > 0 && (
              <div className = 'container'>
                     
                       {data.results.map((post, index) =>(
                         <div key = {index}>
                        <p>
                           <strong>Name:</strong>{post.name.first} {post.name.last}

                        </p>
                       <p><strong>Email:</strong>{post.email}</p>
                       <p><strong>City:</strong>{post.location.city}</p>
                       </div>
                       ))}
              </div>
            )}
        
         



        </div>
    </div>
  )
}
