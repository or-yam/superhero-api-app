import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--mid-gray bg-lightest-yellow br4 3px tc"
        type="search"
        placeholder="Search here"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
