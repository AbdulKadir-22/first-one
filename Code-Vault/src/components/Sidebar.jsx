import React from 'react';
import './Sidebar.css';

const Sidebar = ({ streak = 10, total = 25, onNavigate }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li onClick={() => onNavigate('add')}>+ Add New</li>
        <li onClick={() => onNavigate('topics')}>Topics</li>
        <li onClick={() => onNavigate('tags')}>Tags</li>
        <li>Streak <span className="streak-count">{streak}🔥</span></li>
        <li>Total: <span className="total-count">{total}</span></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
