import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h1>Quiz App</h1>

      <div className="container">
        <form action="">
          <input type="email" name="" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />

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
