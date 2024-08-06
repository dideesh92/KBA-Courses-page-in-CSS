import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("admin");
  const navigate = useNavigate();

  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/");
    } else {
      toast.error(`Please check the input data`);
      return navigate("/sign-up");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      userName,
      password,
      email,
      userType,
    };

    signupSubmit(userDetails);
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
          Sign Up
        </h2>
        <form onSubmit={submitForm}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.2s ease",
              }}
            />
          </div>
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
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.2s ease",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                outline: "none",
                transition: "box-shadow 0.2s ease",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="userType"
              style={{
                display: "block",
                color: "#4a5568",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={{
                border: "1px solid #cbd5e0",
                borderRadius: "0.25rem",
                width: "100%",
                padding: "0.5rem",
              }}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
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
              Sign Up
            </button>
          </div>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#6b21a8",
                textDecoration: "underline",
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
