import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../../firebase.init";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const googleSignIn = e => {
        e.preventDefault();
        signInWithGoogle();
    }
    if(user){
        navigate('/');
    }
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center  justify-center">
        <hr className="border border-komola w-full" />
        <h2 className="text-komola ">or</h2>
        <hr className="border border-komola w-full" />
      </div>
      <button className="text-xl flex items-center justify-center  text-white footer-bg w-full text-center py-2" onClick={googleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SocialLogin;
