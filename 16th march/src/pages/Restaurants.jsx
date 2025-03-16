export default function Restaurants() {
  return (
    <main className="container p-4">
      <h1>Restaurants</h1>
      <div className="card mb-3" style={{ maxWidth: '740px' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="img-fluid "
              alt="not working"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Taste of India</h5>
              <p class="card-text">
                Enjoy authentic Indian cuisine at Taste of India.Explore a
                variety of delicious dishes from different regions of India
              </p>
              <p className="fw-lighter"> Rating: 4.7 | Open Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{ maxWidth: '740px' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="img-fluid "
              alt="not working"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Pizza Paradise</h5>
              <p class="card-text">
                Indulge in mouth-watering pizzas at Pizza Paradise.With a variety of toppings and crusts,It's a pizza lover's dream
              </p>
              <p className="fw-lighter"> Rating: 4.5 | Open Now</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
