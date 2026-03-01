import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <small>Dev Project Tracker MVP</small>
      </footer>
    </div>
  );
}