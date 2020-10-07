import React, { Component } from "react";
import "./style.css";

export default class App extends React.Component {

  constructor() {
    super();
  }

  list = [
    "Sarah",
    "Pedro",
    "John",
    "Maria",
    "Zelda",
    "Albert",
    "Alisson",
  ].sort();

  render() {
    return (
      <div className="interface">
        {this.list.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
    );
  }
}
