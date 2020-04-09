import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((response) => response.json())
      .then((characters) => this.setState({ characters: characters }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterCharacters = this.state.characters.filter((characters) => {
      return characters.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    if (this.state.characters.length === 0) {
      return (
        <div className="tc">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Star Wars Characters</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList characters={filterCharacters} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
