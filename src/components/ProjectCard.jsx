import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const total = project.tasks.length;
  const done = project.tasks.filter((t) => t.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="card">
      <div className="space-between">
        <h3>{project.title}</h3>
        <span className="pill">{project.status}</span>
      </div>
      <p className="muted">{project.description || "No description yet."}</p>
      <p className="muted">Tasks complete: {done}/{total} ({pct}%)</p>

      <Link className="link" to={`/projects/${project.id}`}>
        View details →
      </Link>
    </div>
  );
}