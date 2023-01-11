import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInAuthUserWithEmailAndPassword } from "../../util/firebase";
import "./login.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/");

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="login">
      <h1>Quiz App</h1>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Password"
          />

          <button>Login</button>
          <span>
            dont have an account?
            <Link style={{ textDecoration: "none" }} to="/register">
              Register here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
