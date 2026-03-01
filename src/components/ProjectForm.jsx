import { useState } from "react";

export default function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const canSubmit = title.trim().length >= 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="card stack" onSubmit={handleSubmit}>
      <h2>Create a project</h2>

      <label className="field">
        <span>Title *</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., React Weather App" />
      </label>

      <label className="field">
        <span>Description</span>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What are you building?" />
      </label>

      <button className="button" type="submit" disabled={!canSubmit}>
        Add Project
      </button>
    </form>
  );
}