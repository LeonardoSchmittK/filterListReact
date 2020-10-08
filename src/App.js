import React, { Component } from "react";
import "./style/style.css";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {

    };

    this.filterItem = this.filterItem.bind(this);

  };

  list = [
    "Sarah",
    "Pedro",
    "John",
    "Maria",
    "Zelda",
    "Albert",
    "Alisson",
  ].sort();

    filterItem(event){
       let res = event.target.value;
       console.log(res)
    };

  render() {
    return (
      <div className="interface">
        <input
        type='text'
        className='searchField'
        placeholder='search a name'
        maxLength='20'
        onChange={this.filterItem}
        />

        {this.list.map((item) => (
          <h1 className='item'>{item} </h1>         
        ))}
      </div>
    );
  };
};
