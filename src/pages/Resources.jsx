import { useEffect, useState } from "react";
import { searchRepos } from "../services/github.js";

export default function Resources() {
  const [query, setQuery] = useState("react beginner project");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function run() {
      setLoading(true);
      setError("");
      try {
        const items = await searchRepos(query);
        if (!ignore) setRepos(items);
      } catch (e) {
        if (!ignore) setError(e.message || "Something went wrong.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    run();
    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <section className="stack">
      <h1>Developer Resources</h1>
      <p className="muted">Powered by the GitHub public API.</p>

      <label className="field">
        <span>Search</span>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      {loading && <p className="muted">Loading resources…</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {repos.map((r) => (
          <a key={r.id} className="card link-card" href={r.html_url} target="_blank" rel="noreferrer">
            <div className="space-between">
              <h3>{r.full_name}</h3>
              <span className="pill">★ {r.stargazers_count}</span>
            </div>
            <p className="muted">{r.description || "No description provided."}</p>
            <p className="muted">Language: {r.language || "N/A"}</p>
          </a>
        ))}
      </div>
    </section>
  );
}