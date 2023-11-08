import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function LoginForm() {
  const [eamil, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(eamil, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login!");
    }
  }

  return (
    <div>
      <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={eamil}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account?
          <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}
