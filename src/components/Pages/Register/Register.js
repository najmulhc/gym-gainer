import React, { useState } from "react"
import { Link } from "react-router-dom"
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from "react-firebase-hooks/auth"
import auth from "../../../firebase.init"
import { useNavigate } from "react-router"
import SocialLogin from "../SocialLogin/SocialLogin"
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    // declaring variablaes for auth
    const [displayName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const navigate = useNavigate();
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
    // registration function 
    const  register = async(e) => {
        e.preventDefault();
        console.log("pressed");
        if(password === confirmPassword){
           await createUserWithEmailAndPassword(email, password);
           await updateProfile({displayName});
        } 
        else{
      
        }
      
    }
    if(error){
     console.log(error);
    }
    if(user){
        navigate('/');
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
            onBlur={(e) => setName(e.target.value)} required 
          />
          <input
            type="email"
            placeholder="Your Email "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10" 
            onBlur={(e) => setEmail(e.target.value)} required
          />
          <input
            type="password"
            placeholder="Your Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10"
            onBlur={(e) => setPassword(e.target.value)} required
          />
          <input
            type="password"
            placeholder="Confirm Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full  bg-orange-500 bg-opacity-10"
            onBlur={(e) => setConfirmPassword(e.target.value)} required
          />

          <button className="text-white p-2 bg-komola w-full mt-4 text-2xl " type="submit">
            Register
          </button>
          <small className="text-grey">
            Already registered?
            <Link to="/login" className="text-komola">
              Login here
            </Link>
          </small>
          <SocialLogin/>
        </form>
      </div>
    </div>
  );
};

export default Register;
