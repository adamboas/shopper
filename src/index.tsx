import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import App from './App';
import ShoppingLists from './routes/shopping_lists';
import Recipes from './routes/recipes';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shopping_lists/*" element={<ShoppingLists />} />
        <Route path="recipes/*" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
