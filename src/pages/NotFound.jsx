import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="stack">
      <h1>404</h1>
      <p className="muted">That page doesn’t exist.</p>
      <Link className="button" to="/">Back home</Link>
    </section>
  );
}
