import axios from 'axios';

export const fetchCharacters = async () =>
  (await axios.get('https://akabab.github.io/superhero-api/api/all.json')).data;
