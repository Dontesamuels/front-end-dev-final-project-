import { useProjects } from "../contexts/ProjectContext.jsx";
import ProjectForm from "../components/ProjectForm.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Dashboard() {
  const { projects, addProject } = useProjects();

  return (
    <section className="dashboard">
      <div className="stack">
        <h1>Dashboard</h1>
        <p className="muted">Create projects, track tasks, and stay consistent.</p>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <div className="sidebar">
        <ProjectForm onAdd={addProject} />
      </div>
    </section>
  );
}