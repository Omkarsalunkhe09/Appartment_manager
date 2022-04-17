import { useState } from "react";
// import axios from "axios"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1234/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/Home";
    } else {
      alert("Please check your username and password");
    }
  }
  return (
    <div>
      <div
        style={{
          width: "200px",
          margin: "auto",
        }}
      >
        <h1>Login</h1>
        <br />
        <form onSubmit={loginUser}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          {/* <input type="submit" value="Login" /> */}
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
};
