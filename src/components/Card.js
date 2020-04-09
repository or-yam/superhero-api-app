import React from 'react';

const Card = ({ name, race, image }) => {
  return (
    <div className="tc bg-light-silver dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className= 'ba bw1 br4' alt="profile" src={image} width="200" height="200" />
      <div>
        <h2>{name}</h2>
        <p>{race}</p>
      </div>
    </div>
  );
};

export default Card;
