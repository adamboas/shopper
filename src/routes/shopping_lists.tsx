import { FC } from "react";
import Header from "../components/header";

const ShoppingLists: FC<{ data: string[] }> = ({ data }) => (
  <div className="container">
    <Header />
    <h2>Shipping Lists</h2>
    <ul>
      {data.map(item => <li key={item.toString()}>{item}</li>)}
    </ul>
   </div>
 )


export default ShoppingLists