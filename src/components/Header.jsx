import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="logo">{"</>"}</span>
        <span>Dev Project Tracker</span>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
          Dashboard
        </NavLink>
        <NavLink to="/resources" className={({ isActive }) => (isActive ? "active" : "")}>
          Resources
        </NavLink>
      </nav>
    </header>
  );
}