import React from 'react';
import './ProblemCard.css';

const ProblemCard = ({ index, title, tags, difficulty, date, onClick }) => {
  return (
    <div className="problem-card" onClick={onClick}>
      <span className="problem-index">{index}.</span>

      <div className="problem-info">
        <div className="problem-title">{title}</div>
        <div className="problem-tags">
          {tags.map((tag) => (
            <span key={tag} className="problem-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="problem-meta">
        <span className={`problem-difficulty ${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
        <span className="problem-date">{date}</span>
      </div>
    </div>
  );
};

export default ProblemCard;
