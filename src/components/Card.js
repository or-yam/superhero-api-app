import React from 'react';

const Card = ({ name, publisher, image }) => {
  return (
    <div className="tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        className="ba bw1 br4"
        alt="profile"
        src={image}
        width="200"
        height="200"
      />
      <div>
        <h2 >{name}</h2>
        <h3 className="mid-gray">{publisher}</h3>
      </div>
    </div>
  );
};

export default Card;