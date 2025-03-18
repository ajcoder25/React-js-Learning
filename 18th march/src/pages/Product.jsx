import Header from '../component/Header'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'

const Product = () =>{

  return(
       <>
          <Header/>

   
    <main className = 'mt-2 container'>
    <h2>Products </h2>
  <div className="card mb-3" style={{MaxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://placehold.co/600x400?text=Product+1" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Product 1</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className ='text-secondary'>Price: $79.99 </p>
       <Link to = '/product/1' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{MaxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://placehold.co/600x400?text=Product+2" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Product 2</h5>
        <p className="card-text">This is a Product 2 with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className ='text-secondary'>Price: $90.99 </p>
        <Link to = '/product/2' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{MaxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://placehold.co/600x400?text=Product+3" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Product 3</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className ='text-secondary'>Price: $99.99 </p>
        <Link to = '/product/3' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{MaxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://placehold.co/600x400?text=Product+4" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Product 4</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className ='text-secondary'>Price: $69.99 </p>
        <Link to = '/product/4' className = 'btn btn-primary'>View Product </Link>
      </div>
    </div>
  </div>
</div>




        </main>
 <Footer/>
</>

  )

}
 



export default Product ;