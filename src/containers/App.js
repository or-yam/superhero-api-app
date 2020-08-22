import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((response) => response.json())
      .then((characters) => setCharacters(characters));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filterCharacters = characters.filter((character) => {
    return character.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return !characters.length ? (
    <div className="tc">
      <h1 className="f2">LOADING CHARACTERS...</h1>
    </div>
  ) : (
    <div className="tc">
      <h1 className="f1 v-mid">COMICS SUPER-HEROES</h1>
      <SearchBox searchChange={onSearchChange} />

      <ErrorBoundry>
        <Scroll>
          <CardList characters={filterCharacters} />
        </Scroll>
      </ErrorBoundry>
      <footer className="f3">All data and images from superhero-api.com</footer>
    </div>
  );
}
