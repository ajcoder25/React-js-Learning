
import './App.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'


const App = () =>{
   return(
        <>
       
         <main className = 'container'>
          <img className = 'w-70'src = 'https://s.hdnux.com/photos/47/46/46/10381742/3/rawImage.jpghttps://s.hdnux.com/photos/47/46/46/10381742/3/rawImage.jpg' alt = 'not working'/>

          <h2>Todos</h2>
          <p>Welcome to the Todo application</p>
          <Link to = '/todos' className = 'btn btn-primary'>View Todos</Link>
          


        </main>
     
        </>
   )
}

export default App
