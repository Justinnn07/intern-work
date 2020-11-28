import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    // firebase authentication works
    auth.signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login">
      <img
        src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        alt=""
      />
      <div className="login-container">
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SignIn} className="sign-in">
            Sign-In
          </button>
          <p>This is for project</p>
          <Link to="/register">
            <button className="register">Register</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
