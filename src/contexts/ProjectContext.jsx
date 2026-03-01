import { createContext, useContext, useMemo, useState } from "react";

const ProjectContext = createContext(null);

const seedProjects = [
  {
    id: crypto.randomUUID(),
    title: "Portfolio Landing Page",
    description: "Build a responsive portfolio page.",
    status: "In Progress",
    tasks: [
      { id: crypto.randomUUID(), text: "Create layout", done: true },
      { id: crypto.randomUUID(), text: "Add projects section", done: false },
    ],
    notes: "Keep it simple and mobile-first.",
  },
];

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(seedProjects);

  const addProject = ({ title, description }) => {
    const newProject = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status: "Not Started",
      tasks: [],
      notes: "",
    };
    setProjects((prev) => [newProject, ...prev]);
  };

  const addTask = (projectId, text) => {
    const task = { id: crypto.randomUUID(), text: text.trim(), done: false };
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, tasks: [task, ...p.tasks] } : p))
    );
  };

  const toggleTask = (projectId, taskId) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)),
        };
      })
    );
  };

  const updateNotes = (projectId, notes) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, notes } : p))
    );
  };

  const value = useMemo(
    () => ({ projects, addProject, addTask, toggleTask, updateNotes }),
    [projects]
  );

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProjects() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProjects must be used inside ProjectProvider");
  return ctx;
}