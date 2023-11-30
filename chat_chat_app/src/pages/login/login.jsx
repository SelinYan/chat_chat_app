import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p className="welcome">
            Welcome to the popular social media application chat chat
          </p>
          <span>Don't have an account yet?</span>
          <button className="register">Register</button>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
