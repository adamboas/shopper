import { FC } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const Header: FC = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Shopper</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/shopping_lists">Shopping Lists</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
 )


export default Header