import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((character, i) => {
        return (
          <Card
            key={i}
            id={character.id}
            name={character.name}
            publisher={character.biography.publisher}
            image={character.images.md}
          />
        );
      })}
    </div>
  );
};
export default CardList;
