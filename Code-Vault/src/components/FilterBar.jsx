import React from 'react';
import './FilterBar.css';

const FilterBar = ({ selectedTopic, selectedDifficulty, onTopicChange, onDifficultyChange, onClear }) => {
  const topics = ['Array', 'String', 'Sorting', 'Hashmap', 'DP', 'Recursion'];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <span className="filter-label">Topic:</span>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`filter-btn ${selectedTopic === topic ? 'active' : ''}`}
            onClick={() => onTopicChange(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="filter-section">
        <span className="filter-label">Difficulty:</span>
        {difficulties.map((level) => (
          <button
            key={level}
            className={`filter-btn ${selectedDifficulty === level ? 'active' : ''}`}
            onClick={() => onDifficultyChange(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <button className="clear-btn" onClick={onClear}>🧹 Clear Filters</button>
    </div>
  );
};

export default FilterBar;
