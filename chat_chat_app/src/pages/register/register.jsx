import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register-card">
        <div className="register-card-left">
          <h1 className="h1">Chat Chat</h1>
          <p className="welcome">
            Welcome to the popular social media application chat chat
          </p>
          <span className="question">Do you have an account?</span>
          <button className="registerButton">Login</button>
        </div>
        <div className="register-card-right">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button className="loginButton">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
