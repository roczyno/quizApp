import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase";

import "./register.scss";
import { Link } from "react-router-dom";

import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [error, setError] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
      setError(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="register">
      <h1>Quiz App</h1>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />

          <button type="submit">Sign Up</button>
          <span>
            dont have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login here
            </Link>
            {error && <span style={{ color: "red" }}>Error signing up</span>}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
