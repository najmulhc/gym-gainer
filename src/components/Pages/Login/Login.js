import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
   
  const [loginError, setLoginError] = useState("");
  const resetPassword = () => {
    sendPasswordResetEmail(auth, loginEmail)
    .then(() => {
       
    })
  }
  const login = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredentials) => {
      navigate('/')
    })
    .catch((err) => {
      let loginErr = err.message;
      setLoginError(loginErr)
    })
   }
  
  return (
    <div className="bg-komola h-full w-full">
      <div className="container mx-auto flex items-center justify-center py-8 md:py-20">
        <form action="" className="w-[420px] p-6 bg-white shadow-md" onSubmit={login}>
          <h1 className="text-grey text-3xl font-bold text-center">Login</h1>
          <input
            type="email"
            placeholder="Your Email "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full bg-orange-500 bg-opacity-10"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full bg-orange-500 bg-opacity-10"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <small className="text-grey">
            Forget password?{" "}
            <span className="text-komola" onClick={resetPassword}>
              Reset your password
            </span>
          </small>
          <button
            className="text-white p-2 bg-komola w-full mt-4 text-2xl "
            type="submit"
          >
            Login
          </button>
          <small className="text-red-600 block ">{loginError}</small>  
          <small className="text-grey">
            New to Gymgainer?
            <Link to="/register" className="text-komola">
              
              Register here
            </Link>
          </small>
          <SocialLogin/>
        </form>
      </div>
    </div>
  );
};

export default Login;
