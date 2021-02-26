import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/cardList/cardList.component";

import { SearchBox } from "./components/search/search.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((body) => this.setState({ monsters: body }));
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchField: value });
    console.log(value);
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredSearch = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <div>
          <h1>Monster Rolox</h1>
        </div>
        <div>
          <SearchBox
            type="search"
            placeholder="search monster"
            value={searchField}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <CardList monsters={filteredSearch} />
        </div>
      </div>
    );
  }
}

export default App;
