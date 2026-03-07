import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    csrfToken: "secure-demo-token",
  });
  const [message, setMessage] = useState("");

  const from = location.state?.from || "/dashboard";

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.csrfToken !== "secure-demo-token") {
      setMessage("Invalid request token.");
      return;
    }

    const result = login({
      email: formData.email,
      password: formData.password,
    });

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("");
    navigate(from, { replace: true });
  }

  return (
    <section className="stack">
      <h1>Login</h1>
      <p className="muted">Sign in to access your developer projects.</p>

      <form className="card stack" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="csrfToken"
          value={formData.csrfToken}
          onChange={handleChange}
        />

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </label>

        <label className="field">
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
          />
        </label>

        {message && <p className="error">{message}</p>}

        <button className="button" type="submit">
          Login
        </button>

        <p className="muted">
          Need an account? <Link className="link" to="/register">Register here</Link>
        </p>
      </form>
    </section>
  );
}