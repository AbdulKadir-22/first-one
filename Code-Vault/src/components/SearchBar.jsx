import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search problems..."
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button className="clear-btn" onClick={handleClear}>❌</button>
      )}
    </div>
  );
};

export default SearchBar;
