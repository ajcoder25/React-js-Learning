
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'
import {Link} from 'react-router-dom'
import Footer from './component/Footer'

const App = () =>(

    <>
    <Header/>
       <main className = 'container'>
          <h1 className= 'mt-4'>Featured Products</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="https://placehold.co/600x400?text=Product+1" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Product 1</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to = '/product/1' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://placehold.co/600x400?text=Product+2" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to = '/product/2' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://placehold.co/600x400?text=Product+2" class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to = '/product/3' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
 
  
</div>
          
      </main>
      <Footer/>
</> 
)

export default App
