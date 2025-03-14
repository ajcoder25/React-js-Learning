import './App.css';

const Book = ({ checkBook }) => {
  const findBook = checkBook.filter((book) => book.genre === 'Science Fiction');

  const showAll = findBook.map((book) => {
    return (
      <div key={book.id}>
        <h2>{book.title}</h2>
        <p>Genre: {book.genre}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Book Data </h2>
      {showAll}
    </div>
  );
};

const Users = ({ userCheck }) => {
  const filter = userCheck.filter((user) => user.role === 'Admin');

  const showAll = filter.map((user) => {
    return (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>Role: {user.role}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>User Data </h2>
      {showAll}
    </div>
  );
};

const Product = ({ checkProduct }) => {
  const filterProduct = checkProduct.filter((product) => product.price > 100);

  const showAll = filterProduct.map((product) => {
    return (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>
          <p>
            Features:{' '}
            {Object.entries(product.features)
              .map(([key, value]) => `${key}: ${value}`)
              .join(', ')}
          </p>
        </p>
      </div>
    );
  });

  return (
    <div>
      <h2>Product price above $100 above </h2>
      {showAll}
    </div>
  );
};

const Cities = ({ checkCities }) => {
  const filterCities = checkCities.filter((city) => city.population > 1000000);

  const showAll = filterCities.map((city) => {
    return (
      <div key={city.id}>
        <h2>{city.name}</h2>
        <p>Population:{city.population}</p>
      </div>
    );
  });

  return (
    <>
      <h2>Population Data</h2>
      {showAll}
    </>
  );
};

const Movies = ({ checkMovies }) => {
  const filterMovie = checkMovies.filter((movie) => movie.releaseYear > 2015);

  const showMovies = filterMovie.map((movie) => {
    return (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>Release Year: {movie.releaseYear}</p>
      </div>
    );
  });

  return (
    <>
      <h2>Information Movies </h2>
      {showMovies}
    </>
  );
};

const Podcast = ({ checkPodcast }) => {
  let podcastFilter = checkPodcast.filter((podcast) => podcast.featured);
  console.log(podcastFilter);

  let showAll = podcastFilter.map((podcast) => {
    return (
      <div key={podcast.id}>
        <h2>{podcast.title}</h2>
        <p> Host: {podcast.host.join(',')}</p>
        <p>Featured: {podcast.featured ? 'True' : 'false'}</p>
      </div>
    );
  });
  return (
    <div>
      <h2>Details of Podcasts</h2>
      {showAll}
    </div>
  );
};

const NewMovies = ({ checknewMovies }) => {
  const filterMovie = checknewMovies.filter(
    (movie) => movie.releaseYear > 2000
  );
  console.log(filterMovie);

  const showAll = filterMovie.map((movie) => {
    return (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>Release Year: {movie.releaseYear}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Movie Data </h2>
      {showAll}
    </div>
  );
};

const Tasks = ({ checkTasks }) => {
  const filterTask = checkTasks.filter((task) => task.completed);

  const showAll = filterTask.map((movie) => {
    return (
      <div key={movie.id}>
        <h2>{movie.description}</h2>
        <p>Completed: {movie.completed ? 'True' : 'False'}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Total Number of tasks Completed </h2>
      {showAll}
    </div>
  );
};
export default function App() {
  const books = [
    { id: 1, title: 'Dune', genre: 'Science Fiction' },
    { id: 2, title: 'Neuromancer', genre: 'Science Fiction' },
    { id: 3, title: 'Foundation', genre: 'Sci-fi' },
  ];

  const users = [
    { id: 1, name: 'Alice', role: 'User' },
    { id: 2, name: 'Bob', role: 'Admin' },
    { id: 3, name: 'Charlie', role: 'User' },
    { id: 4, name: 'John', role: 'Admin' },
  ];

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      features: { Color: 'green', isWaterProof: false },
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      features: { Color: 'blue', isWaterProof: true },
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      features: { Color: 'silver', isWaterProof: false },
    },
  ];

  const cities = [
    { id: 1, name: 'New York', population: 8500000 },
    { id: 2, name: 'Los Angeles', population: 539900 },
    { id: 3, name: 'Chicago', population: 2700000 },
  ];
  const movies = [
    { id: 1, title: 'Inception', releaseYear: 2010 },
    { id: 2, title: 'La La Land', releaseYear: 2016 },
    { id: 3, title: 'Interstellar', releaseYear: 2014 },
    { id: 4, title: 'Dune2', releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: 'Tech Talk', host: ['host1'], featured: true },
    { id: 2, title: 'Business insights', host: ['host 2'], featured: false },
    {
      id: 3,
      title: 'Science Hour',
      host: ['host 3', 'host 4'],
      featured: true,
    },
  ];
  const newMovies = [
    { id: 1, title: 'The Matrix', duration: 136, releaseYear: 1999 },
    { id: 2, title: 'Inception', duration: 148, releaseYear: 2010 },
    { id: 3, title: 'Avatar', duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
    { id: 1, description: 'Complete project proposal', completed: true },
    { id: 2, description: 'Review client feedback', completed: false },
    { id: 3, description: 'Submit final report', completed: true },
  ];
  return (
    <div>
      <Book checkBook={books} />
      <hr />
      <Users userCheck={users} />
      <hr />
      <Product checkProduct={products} />
      <hr />
      <Cities checkCities={cities} />
      <hr />
      <Movies checkMovies={movies} />
      <hr />
      <Podcast checkPodcast={podcasts} />

      <hr />
      <NewMovies checknewMovies={newMovies} />
      <hr />
      <Tasks checkTasks={tasks} />
    </div>
  );
}
