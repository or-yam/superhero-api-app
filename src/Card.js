import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="profile"
        src={`https://superheroapi.com/api/10221129921332633/${id}/image`.url}
        width="200"
        height="200"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

// let json = GET https://superheroapi.com/api/10221129921332633/id/image