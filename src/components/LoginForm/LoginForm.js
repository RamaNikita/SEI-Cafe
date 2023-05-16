import { useState } from "react";
import * as userService from "../../utilities/users-service";
export default function LoginForm({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await userService.login(credentials);
      setUser(user);
    } catch (err) {
      setError("Log in failed-Try again");
    }
  }
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
