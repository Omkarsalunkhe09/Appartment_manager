import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as React from "react";

import FadeLoader from "react-spinners/ClipLoader";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEff = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    alert("sucessfully Register");
    window.location.href = "/login";
  };

  async function registerUser(event) {
    event.preventDefault();
    // setAdding(true);
    axios.post("http://localhost:1234/api/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="App">
      <div>
        <h1>Sign-up</h1>
        <br />
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <br />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              width: "250px",
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            <button className="btn btn-primary" onClick={handleEff}>
              Register
            </button>

            <Link to="/login">
              <button className="btn btn-success">Login</button>
            </Link>
          </div>
        </form>
        <br />
        <br />
        {loading ? (
          <FadeLoader color="#5D8B2A" loading={loading} size={50} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
