import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // If you have custom styles

const Sidebar = ({ streak = 0, total = 0 }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar" >
      <h2>Dashboard</h2>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li>
          <Link to="/add" style={{ color: isActive("/add") ? "orange" : "chartreuse", textDecoration: "none" }}>
            + Add New
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: isActive("/") ? "#C9F41F" : "chartreuse", textDecoration: "none" }}>
            Topics
          </Link>
        </li>
        <li>
          <span>Tags</span>
        </li>
        <li>
          Streak <span>{streak}🔥</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
