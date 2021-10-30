import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";



const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
   const {
       handleGoogleLogin,
       emailAndPasswordSignUp,
       handleGithubLogin,
       error,
       updateUserName,
   } = useAuth();
   const location = useLocation();
   const history = useHistory();
   const redirect_uri = location.state?.from || "/";

   const GoogleLogin = () => {
       handleGoogleLogin()
          history.push(redirect_uri);
    };
    
    const GithubLogin = () => {
        handleGithubLogin();
        history.push(redirect_uri);
    };

   // name
   const setUserName = (e) => {
       setName(e.target.value);
   };

   // email
   const handleEmailChange = (e) => {
       setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
       if (e.target.value.length < 6) {
          console.log("password must need to be at least 6 characters");
           return;
       } else {
           setPassword(e.target.value);
       }
   };

   const handleRegister = (e) => {
       e.preventDefault();
       if (password.length < 6) {
           setUserError("Password should be at least 6 characters");
           return;
       }
       emailAndPasswordSignUp(email, password);
       updateUserName(name);
       setUserError("");
   };

   return (
       <div className="container text-center my-4">
           <div>
               <h2 className="m-3">Register: Create Account</h2>
               <form onSubmit={handleRegister}>
                   <input
                       onBlur={setUserName}
                       type="name"
                       name="name"
                       id=""
                       placeholder="Your Name"
                       required
                       className="m-3"
                   />
                   <br />
                   <input
                       onChange={handleEmailChange}
                       type="email"
                       name="email"
                       id=""
                       placeholder="Your Email"
                       required
                   />
                   <br />
                   <input
                       onChange={handlePasswordChange}
                       type="password"
                       name="password"
                       id=""
                       placeholder="Your Password"
                       required
                       className="m-3"
                   />
                   <br />
                   <input
                       onChange={handlePasswordChange}
                       type="password"
                       name="password"
                       id=""
                       placeholder="Re-enter Password"
                       required
                   />
                   <br />
                   <p className="text-danger">{error || userError}</p>
                   <input
                       className="mt-3 w-5 btn btn-success m-auto"
                       type="submit"
                       value="Register"
                   />
               </form>
               <p className="m-3">
                   Already have an account? <Link to="/login">Login</Link>
               </p>
               <div>----------or-------------</div>
               <button
                   onClick={GoogleLogin}
                   className="bg-info border rounded-pill px-2 py-1 m-3"
               >
                   Google Sign In
               </button>
               <button
                   onClick={GithubLogin}
                   className="btn rounded-pill btn-dark m-2"
               >
                   Github sign in
               </button>
           </div>
       </div>
   );
};

export default Register;