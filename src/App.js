import React, { Component, useState } from "react";
import "./style/style.css";
import names from "./names";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = names();
    this.state = {
      suggestions: [],
      key:0,
    };

    this.onTextChanged = this.onTextChanged.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.getFocus = this.getFocus.bind(this)
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
       const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => v.match(regex));
      localStorage.setItem("v", JSON.stringify(suggestions));
    }

    this.setState(() => ({
      suggestions: JSON.parse(localStorage.getItem("v")),
    }));
  };

  renderSuggestions() {
    
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return  null  
    }
    return (
      <>
        {JSON.parse(localStorage.getItem("v")).map((item) => (
          <li className="item" key={this.state.key + 1}>
            <i className="userIcon far fa-user"></i>
            {item}
          </li>
        ))}
      </>
    );

  }

    getFocus(){
      window.document.querySelector('.searchField').focus()    
    }

  render() {
    let items = this.state.suggestions;
    return (
      <div className="interface" >
        <h1 className="title">
          Search a name
          <span className="counter">
            {items.length > 0
              ? items.length
              : null}
          </span>
        </h1>
        <input
          type="text"
          className="searchField"
          maxLength="13"
          onChange={this.onTextChanged}
          onMouseMove={this.getFocus}
        />
        <i className="searchIcon fas fa-search"></i>
        
         {this.renderSuggestions() } 

      </div>
    );
  }
}
