import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="stack">
      <h1>Track your developer projects in one place.</h1>
      <p>
        This MVP helps you organize projects, track tasks, and discover dev resources.
      </p>

      <div className="card">
        <h2>What you can do</h2>
        <ul>
          <li>Create projects and track tasks</li>
          <li>Use a dashboard to view progress</li>
          <li>Browse developer resources via an API</li>
        </ul>
      </div>

      <div className="row">
        <Link className="button" to="/dashboard">Go to Dashboard</Link>
        <Link className="button secondary" to="/resources">Browse Resources</Link>
      </div>
    </section>
  );
}