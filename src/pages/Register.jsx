import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    csrfToken: "secure-demo-token",
  });
  const [message, setMessage] = useState("");

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

    const result = register(formData);

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("");
    navigate("/dashboard", { replace: true });
  }

  return (
    <section className="stack">
      <h1>Register</h1>
      <p className="muted">Create an account to manage your projects.</p>

      <form className="card stack" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="csrfToken"
          value={formData.csrfToken}
          onChange={handleChange}
        />

        <label className="field">
          <span>Name</span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>

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

        <label className="field">
          <span>Confirm Password</span>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
          />
        </label>

        {message && <p className="error">{message}</p>}

        <button className="button" type="submit">
          Register
        </button>

        <p className="muted">
          Already have an account? <Link className="link" to="/login">Login here</Link>
        </p>
      </form>
    </section>
  );
}