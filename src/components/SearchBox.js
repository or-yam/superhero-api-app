import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--black bg-lightest-blue br4 3px tc"
        type="search"
        placeholder="Search here"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
