import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-left">
          <h1 className="h1">Hello World!</h1>
          <p className="welcome">
            Welcome to the popular social media application chat chat
          </p>
          <span className="question">Don't have an account yet?</span>
          <button className="registerButton">Register</button>
        </div>
        <div className="card-right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
