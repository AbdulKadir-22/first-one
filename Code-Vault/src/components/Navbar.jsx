import React from 'react';
import './Navbar.css';

const Navbar = ({ onSearchChange, selectedTag, onTagClick }) => {
  const tags = ['Array', 'String', 'Hashtable', 'Sorting', 'Greedy', 'Binary'];

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title">Code–Vault</h1>
      </div>

      <div className="navbar-columns">
        <span className="column-title">#Title</span>
        <span className="column-difficulty">Difficulty</span>
        <span className="column-date">Date</span>
      </div>
    </nav>
  );
};

export default Navbar;
