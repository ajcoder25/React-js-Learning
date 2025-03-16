
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function App(){

  return(
       <main className = 'container p-5'>

         <div>
         <h1>Featured Restaurants</h1>
         <img className = 'img-fluid' src = "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt = "not working"/>
         <p><strong className = 'py-2'>Taste of Italy</strong></p>
         <p>Italian | Rating: 4.5 </p>
         <p>123 Main Street, Anytown,USA </p>
         </div>

         <div>
          <img className = 'img-fluid' src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <p><strong>Spice Village</strong> </p>
          <p>Indian | Rating: 4.3 </p>
          <p>456 Elm Street,Anytown, USA</p>

        </div>


      </main>
  )

}
