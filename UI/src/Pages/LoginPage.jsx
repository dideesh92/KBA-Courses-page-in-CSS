import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });
    if (res.ok) {
      const data = await res.json();
      const userType = data.userType;
      toast.success(`Logged in as : ${userType}`);
      return navigate("/home");
    } else {
      toast.error(`Please check your credentials`);
      return navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f3e8ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "24rem",
          width: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            color: "#6b21a8",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Login
        </h2>
        <form onSubmit={loginSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.2s ease",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.2s ease",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <button
              type="submit"
              style={{
                backgroundColor: "#6b21a8",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                fontWeight: "bold",
                transition: "background-color 0.2s ease",
                outline: "none",
              }}
            >
              Login
            </button>
            <Link
              to="#"
              style={{
                color: "#6b21a8",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </Link>
          </div>
          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              style={{
                color: "#6b21a8",
                textDecoration: "underline",
              }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
