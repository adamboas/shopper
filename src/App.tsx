import React from 'react';
import './App.scss';
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <h2>Welcome to shoppper</h2>
      <p>
        Shopper makes the work of creating a shoping list easy. Simply create a list of stapes,
        add your recipes to the weekly menu and import the ingredients into your shopping list.
      </p>
    </div>
  );
}

export default App;
