import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const { handleGoogleLogin, handleGithubLogin, emailAndPasswordLogIn, error } =
      useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");

  const GoogleLogin = () => {
     handleGoogleLogin()
         history.push(redirect_uri);
    };
    
  const GithubLogin = () => {
      handleGithubLogin();
      history.push(redirect_uri);
  };

  const hanldeEmail = (e) => {
      setEmail(e.target.value);
  };

  const hanldePassword = (e) => {
      setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
      e.preventDefault();
      if (password.length < 6) {
          setUserError("Password should be at least 6 characters");
          return;
      }
      emailAndPasswordLogIn(email, password);
      setUserError("");
      history.push(redirect_uri);
  };

  return (
      <div className="container text-center my-4 ">
          <h2>Please Login</h2>
          <form onSubmit={handleLogIn}>
              <input
                  onChange={hanldeEmail}
                  type="email"
                  name=""
                  id=""
                  className="m-3"
                  placeholder="Your Email"
              />
              <br />
              <input
                  onChange={hanldePassword}
                  type="password"
                  name=""
                  id=""
                  placeholder="Your Password"
              />
              <br />
              <p className="text-danger">{error || userError}</p>
              <input
                  className="btn btn-success px-2 rounded-pill m-2"
                  type="submit"
                  value="LogIn"
              />
          </form>
          <p>
              new to Obayed Tours & Travels?{" "}
              <Link to="/register">Create Account</Link>
          </p>
          <div>-------or----------</div>
          <br />
          <Button
              className="btn-regular rounded-pill"
              onClick={GoogleLogin}
              variant="primary"
          >
              Google Sign In
          </Button>
          <button
              onClick={GithubLogin}
              className="btn rounded-pill btn-dark m-2"
          >
              Github sign in
          </button>
      </div>
  );
};

export default Login;