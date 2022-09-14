import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  return (
    <div className="formContainer">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          auth.signup({
            email,
            password,
            callback: () => navigate("/webapp"),
          });
          setEmail("");
          setPassword("");
        }}
      >
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
