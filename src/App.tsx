import React from 'react';
import { Link } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="container">
      <header>
        <h2>Welcome to shoppper</h2>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/shopping_lists">Shopping Lists</Link> |{" "}
        <Link to="/recipes">Recipes</Link>
      </nav>
      </header>
    </div>
  );
}

export default App;
