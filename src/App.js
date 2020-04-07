import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { characters } from './characters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
      searchField: '',
    };
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
    return (
      <div className="tc">
        <h1 className='f1'>Star Wars Characters</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList characters={filterCharacters} />
      </div>
    );
  }
}

export default App;
