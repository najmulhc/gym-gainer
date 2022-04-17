import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init"
import { useNavigate } from "react-router";
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    // declaring variablaes for auth
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [regError, setRegError] = useState("");
    const navigate = useNavigate();
    // registration function 
    const register = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        } else {
            setRegError("Passwords did not matched")
        }
    }
    if(error){
        let err = error.message;
        setRegError(err);
    }
    if(user){
        navigate("/login");
    }
  return (
    <div className="bg-komola h-full w-full">
      <div className="container mx-auto flex items-center justify-center py-8 md:py-20">
        <form action="" className="w-[420px] p-6 bg-white shadow-md" onSubmit={register}>
          <h1 className="text-grey text-3xl font-bold text-center">Register</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-4  border-0 border-b-2 border-komola bg-orange-500 bg-opacity-10 p-3 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="text-white p-2 bg-komola w-full mt-4 text-2xl " type="submit">
            Register
          </button>
          <p className="text-red-700 block"> {regError}</p>
          <small className="text-grey">
            Already registered?
            <Link to="/login" className="text-komola">
              Login here
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
