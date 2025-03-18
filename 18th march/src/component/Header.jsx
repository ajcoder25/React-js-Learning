import { NavLink } from 'react-router-dom';

const Header = () => (
  <>
    <header className="bg-dark text-light py-4">
      <div className="container ">
        <h1>Ecommerce Website</h1>
        <ul class="nav mt-4">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product">
              {' '}
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  </>
);

export default Header;
