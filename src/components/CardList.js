import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => (
  <div>
    {characters.map(({ id, name, biography, images }) => {
      return (
        <Card
          key={id}
          id={id}
          name={name}
          publisher={biography.publisher}
          image={images.md}
        />
      );
    })}
  </div>
);

export default CardList;
