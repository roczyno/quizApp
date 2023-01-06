import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <h1>Quiz App</h1>

      <div className="container">
        <form action="">
          <input type="text" name="" placeholder="Username" />
          <input type="email" name="" placeholder="Email" />
          <input type="password" name="" placeholder="Password" />
          <input type="password" name="" placeholder="Confirm Password" />
          <button>Sign Up</button>
          <span>
            dont have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
