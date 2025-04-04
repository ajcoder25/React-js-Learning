import {Link} from 'react-router-dom'
import react from "react"
export default function App(){
  return(
      
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to = '/' className="navbar-brand">Company Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link to ='/employee' className="nav-link" href="#">Employee</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/report">Report</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


  
  )
}