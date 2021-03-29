import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import LoadingMessage from '../components/LoadingMessage';
import { fetchCharacters } from '../services/api';
import './App.css';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    (async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    })();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filterCharacters = characters.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  if (!characters.length) {
    return <LoadingMessage />;
  }

  return (
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
