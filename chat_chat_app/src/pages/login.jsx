import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handelChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login-main-container">
      <div className="login">
        <div className="login-card">
          <div className="login-card-left">
            <h1 className="h1">Connect us!</h1>
            <p className="welcome">
              Welcome to the popular social media application chat chat
            </p>
            <span className="question">Don't have an account yet?</span>
            <Link to="/register">
              <button className="registerButton">Register</button>
            </Link>
          </div>
          <div className="login-card-right">
            <h2 className="register-login-h2">Login</h2>
            <form className="form">
              <input
                className="register-input"
                type="text"
                placeholder="Username"
                name="username"
                onChange={handelChange}
              />
              <input
                className="register-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handelChange}
              />
              {err && err}
              <button className="loginButton" onClick={handelLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
