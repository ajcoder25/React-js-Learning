import { useState } from 'react'

import './App.css'
import useFetch from "./useFetch.jsx" 




export default function App(){

  const [moreInfo, setInfo] = useState(false)
  const{data,loading,error, fetchData} = useFetch("https://randomuser.me/api/?results=3")

  console.log(data)
  
  return(
    <div className = 'container mt-4'>
      <h2>People Directory</h2>
      <button onClick = {fetchData} className = 'btn btn-primary' >Get People</button>

        <div>
          {loading && <p>...Loading</p>}
          {error && <p>Unable to fetch the data </p>}
          {data && data.results.length > 0 && (
            <div className = 'container mt-4'>
              <div class="row">

                 {data.results.map((post, index) =>(
                   <div class="col-sm-4 mb-3 mb-sm-0">
                   <div class="card" id = {index}>
                     <div class="card-body">
                     <img src = {post.picture.large} width ={200} className="card-img-top"/>

                       <h5 class="card-title">{post.name.first}{post.name.last}</h5>
                       <p class="card-text">Age: {post.dob.age}</p>
                       <p class="card-text">Username: {post.login.username}</p>
                       <p class="card-text">Email: {post.email}</p>
                       {
                         moreInfo && (
                           <div>
                             <p>Phone Number: {post.phone}</p>
                             <p>Full Address:</p>{post.location.street.number}, {post.location.street.name},{post.location.city},
                             {post.location.state},{post.location.country}{post.location.postcode}
                          

                          </div>
                         )
                       }
                      
                     
                     </div>
                  
                   </div>

                  
                 </div>
                   
                 ))}
                
                <div className = 'container text-center p-5 '>

                 <button className = 'btn btn-primary px-5' onClick = {(e) => setInfo(!moreInfo)}>
                   {moreInfo ? "Show Less Info": "Show more Data"} 
                 </button>

                 </div>
          </div>
           </div>

          )}



        </div>

    </div>
  )
}