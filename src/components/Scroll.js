import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '75%',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
