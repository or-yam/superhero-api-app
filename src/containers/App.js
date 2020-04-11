import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
      .then((characters) => this.setState({ characters: characters }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { characters, searchField } = this.state;
    const filterCharacters = characters.filter((character) => {
      return character.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return !characters.length ? (
      <div className="tc">
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Super Heroes Characters</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList characters={filterCharacters} />
        </Scroll>
      </div>
    );
  }
}

export default App;
