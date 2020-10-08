import React, { Component } from "react";
import "./style/style.css";
import names from "./names";

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = names();
    this.state = {
      suggestions: [],
    };

    this.onTextChanged = this.onTextChanged.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  onTextChanged = (e) => {
    const value = e.target.value;

    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
      localStorage.setItem("v", JSON.stringify(suggestions));
    }

    this.setState(() => ({
      suggestions: JSON.parse(localStorage.getItem("v")),
    }));
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <>
        {JSON.parse(localStorage.getItem("v")).map((item) => (
          <li className="item" key={item + 1}>
            <i className="userIcon far fa-user"></i>
            {item}
          </li>
        ))}
      </>
    );
  }

  render() {
    let items = this.state.suggestions;
    return (
      <div className="interface">
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
        />
        <i className="searchIcon fas fa-search"></i>

        {this.renderSuggestions()}
      </div>
    );
  }
}
