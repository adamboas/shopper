import React, { Component } from "react";
import Header from "../components/header";

const lists = [
  "Jan 12th",
  "Jan 19th",
  "Jan 26th",
]

type ShoppingListProps = {
  list: string[]
}

export default class ShoppingLists extends Component<{}, ShoppingListProps> {
  constructor(props: ShoppingListProps) {
    super(props);
    this.state = { list: lists }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h2>Shipping Lists</h2>
        <ul>
          {this.state.list.map(item => <li key={item.toString()}>{item}</li>)}
        </ul>
      </div>
    );

  }
}