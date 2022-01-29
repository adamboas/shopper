import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import { FC } from 'react';
import App from './App';
import ShoppingLists from './routes/shopping_lists';
import Recipes from './routes/recipes';

const lists = [
  "Jan 12th",
  "Jan 19th",
  "Jan 26th",
]

const recipe_list = [
  "Not meat lasagne",
  "Notage rolls",
  "Chicken pesto pasta",
  "Lily's tomato soup"
]

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shopping_lists" element={<ShoppingLists data={lists} />} />
        <Route path="recipes" element={<Recipes data={recipe_list} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
