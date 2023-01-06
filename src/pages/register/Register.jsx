import "./register.scss";

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
          <span>dont have an account? Login here</span>
        </form>
      </div>
    </div>
  );
};

export default Register;
