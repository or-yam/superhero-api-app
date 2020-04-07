import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--yellow bg-lightest-yellow"
        type="search"
        placeholder="Type here to search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
