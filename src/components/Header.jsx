import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();

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
        <NavLink to="/resources" className={({ isActive }) => (isActive ? "active" : "")}>
          Resources
        </NavLink>

        {isAuthenticated ? (
          <>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
            <span className="muted nav-user">Hi, {user?.name}</span>
            <button className="button secondary" type="button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}