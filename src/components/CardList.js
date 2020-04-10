import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((user, i) => {
        return (
          <Card
            key={i}
            id={characters[i].id}
            name={characters[i].name}
            publisher={characters[i].biography.publisher}
            image={characters[i].images.md}
          />
        );
      })}
    </div>
  );
};
export default CardList;
