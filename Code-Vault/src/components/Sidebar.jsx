import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // If you have custom styles

const Sidebar = ({ streak = 0, total = 0 }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar" style={{ backgroundColor: "black", color: "chartreuse", padding: "1rem", height: "100vh", width: "200px", position: "fixed", top: 0, left: 0 }}>
      <h2 style={{ fontFamily: "monospace", marginBottom: "2rem" }}>Dashboard</h2>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li>
          <Link to="/add" style={{ color: isActive("/add") ? "orange" : "chartreuse", textDecoration: "none" }}>
            + Add New
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: isActive("/") ? "orange" : "chartreuse", textDecoration: "none" }}>
            Topics
          </Link>
        </li>
        <li>
          <span>Tags</span>
        </li>
        <li style={{ color: "red" }}>
          Streak <span style={{ color: "orange" }}>{streak}🔥</span>
        </li>
        <li>
          Total: <span style={{ color: "cyan" }}>{total}</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
