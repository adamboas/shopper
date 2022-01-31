import { type } from 'os';
import React, { Component } from 'react';
import Header from "../components/header";

const recipe_list = [
  "Not meat lasagne",
  "Notage rolls",
  "Chicken pesto pasta",
  "Lily's tomato soup"
]

type RecipeProps = {
  list: string[]
}

export default class Recipes extends Component<{}, RecipeProps> {
  constructor(props: RecipeProps) {
    super(props);
    this.state = { list: recipe_list }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h2>Recipes</h2>
        <ul>
          {this.state.list.map(item => <li key={item.toString()}>{item}</li>)}
        </ul>
      </div>
    );
  }
}