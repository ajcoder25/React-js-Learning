import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import {Link} from 'react-router-dom'


import './App.css'

export default function App(){

   return(
     <div>
       <Header/>
        <main className = 'container py-5'>
           <img src = "https://placehold.co/300x300?text=Employees+Smilling" alt = 'Not working'/>

        <div className = 'mt-4'>
           <h3>Our Employees</h3>
           <p>Meet our dedicated team professionals who work tirelessly to achieve our company's goals.</p>

           <Link to = '/employee' className = 'btn btn-primary'>View Employees</Link>
       </div>

       <div className = 'mt-4'>
           <h3>Company Report</h3>
           <p>Explore our latest Financial to gain insights into our company's performance and growth.</p>

           <Link to = '/report' className = 'btn btn-primary'>View Employees</Link>
       </div>


        </main>
   <Footer/>
    </div>
   )

}

