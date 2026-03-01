import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProjects } from "../contexts/ProjectContext.jsx";

export default function ProjectDetails() {
  const { id } = useParams();
  const { projects, addTask, toggleTask, updateNotes } = useProjects();
  const project = useMemo(() => projects.find((p) => p.id === id), [projects, id]);

  const [taskText, setTaskText] = useState("");

  if (!project) {
    return (
      <section className="stack">
        <h1>Project not found</h1>
        <Link className="link" to="/dashboard">← Back to Dashboard</Link>
      </section>
    );
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim().length < 2) return;
    addTask(project.id, taskText);
    setTaskText("");
  };

  return (
    <section className="stack">
      <div className="space-between">
        <h1>{project.title}</h1>
        <Link className="link" to="/dashboard">← Dashboard</Link>
      </div>

      <div className="card stack">
        <h2>Tasks</h2>

        <form className="row" onSubmit={handleAddTask}>
          <input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Add a task..."
          />
          <button className="button" type="submit">Add</button>
        </form>

        {project.tasks.length === 0 ? (
          <p className="muted">No tasks yet. Add your first task above.</p>
        ) : (
          <ul className="list">
            {project.tasks.map((t) => (
              <li key={t.id} className="list-item">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => toggleTask(project.id, t.id)}
                  />
                  <span className={t.done ? "done" : ""}>{t.text}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card stack">
        <h2>Notes</h2>
        <textarea
          value={project.notes}
          onChange={(e) => updateNotes(project.id, e.target.value)}
          placeholder="Write notes for this project..."
        />
      </div>
    </section>
  );
}