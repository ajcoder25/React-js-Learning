import Header from '../Components/Header';
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'

function Blogs() {
  
    return (
      <>
      
    <Header />
    <main className = "container mt-5">
      <h2>Blogs</h2>
    <div className="card w-75 mb-3 ">
  <div className="card-body">
    <h5 className="card-title">Blog 1</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to = "/blogs/1"className = 'btn btn-primary'>Read More</Link>
  </div>
</div>
<div className="card w-75 mb-3 ">
  <div className="card-body">
    <h5 className="card-title">Blog 2</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to = '/blogs/2' className = 'btn btn-primary'>Read More</Link>
  </div>
</div>
<div className="card w-75 mb-3 ">
  <div className="card-body">
    <h5 className="card-title">Blog 3</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to = '/blogs/3' className = 'btn btn-primary'>Read More</Link>
  </div>
</div>


    </main>
    <Footer/>
    </>
    )

}

export default Blogs;
