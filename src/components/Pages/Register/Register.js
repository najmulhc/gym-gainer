import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-komola h-full w-full">
      <div className="container mx-auto flex items-center justify-center py-8 md:py-20">
        <form action="" className="w-[420px] p-6 bg-white shadow-md">
          <h1 className="text-grey text-3xl font-bold text-center">Register</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full"
          />
          <input
            type="email"
            placeholder="Your Email "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full"
          />
          <input
            type="password"
            placeholder="Your Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password "
            className="mt-4  border-0 border-b-2 border-komola p-3 w-full"
          />

          <button className="text-white p-2 bg-komola w-full mt-4 text-2xl ">
            Register
          </button>
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
