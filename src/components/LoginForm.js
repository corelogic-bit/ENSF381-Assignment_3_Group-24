import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  // Redirect to /flavors after 2 seconds on successful login
  useEffect(() => {
    if (messageType === "success") {
      var timer = setTimeout(function () {
        navigate("/flavors");
      }, 2000);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [messageType, navigate]);

  async function handleLogin(event) {
    event.preventDefault();

    // Validate inputs
    if (username.trim() === "" || password.trim() === "") {
      setMessageType("error");
      setMessage("Username and password cannot be empty.");
      return;
    }

    if (password.length < 8) {
      setMessageType("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }

    try {
      var response = await fetch("https://jsonplaceholder.typicode.com/users");
      var users = await response.json();

      var foundUser = users.find(function (user) {
        return user.username.toLowerCase() === username.trim().toLowerCase();
      });

      if (!foundUser) {
        setMessageType("error");
        setMessage("Username not found. Please try again.");
        return;
      }

      if (password !== foundUser.email) {
        setMessageType("error");
        setMessage("Incorrect password. Please try again.");
        return;
      }

      setMessageType("success");
      setMessage("Login successful");
    } catch (error) {
      setMessageType("error");
      setMessage("An error occurred while processing request.");
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <a href="#!" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
        </div>
      </form>
      {message && <DisplayStatus type={messageType} message={message} />}
    </div>
  );
}

export default LoginForm;
