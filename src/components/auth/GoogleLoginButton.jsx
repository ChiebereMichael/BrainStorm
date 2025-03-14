import { auth, provider } from "./firebase";
import React from "react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  
  const handleGoogleLogin = async () => {
    try {
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithRedirect(auth, provider);
      // The redirect will happen and RouterPath will handle the result
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <button
      onClick={()=>{navigate("/dashboard")}}
      className="text-base px-6 py-1 md:px-8 md:py-1.5 mt-6 bg-textGreen text-white rounded-md hover:bg-textHover transition"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;