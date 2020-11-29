import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import db, { auth } from "./firebase";
import "./Register.css";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [companies, setCompanies] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/login");
        }
      })
      .catch((err) => alert(err.message));
    db.collection("user-info").add({
      name: name,
      companies: companies,
      email: email,
      Contact: phone,
    });
    setCompanies("");
    setName("");
    setPhone("");
  };

  return (
    <div className="registration">
      <img
        className="register-img"
        src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        alt=""
      />
      <div className="registration-container">
        <form>
          <h5>Name</h5>
          <input onChange={(e) => setName(e.target.value)} type="text" />
          <h5>Company</h5>
          <input onChange={(e) => setCompanies(e.target.value)} type="text" />
          <h5>Email</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5> phone number</h5>
          <input onChange={(e) => setPhone(e.target.value)} type="number" />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register} type="submit" className="sign-up">
            Sign-Up
          </button>
          <Link to="/login">
            <button className="btn-btn">Sign-In</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
