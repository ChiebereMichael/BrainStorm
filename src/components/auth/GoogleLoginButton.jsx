import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";
import React from "react";
import { signInWithRedirect } from "firebase/auth";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      provider.setCustomParameters({ prompt: "select_account" }); // ✅ Set this before redirect
      await signInWithRedirect(auth, provider); // ✅ No need to store result here
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="text-base px-6 py-1 md:px-8 md:py-1.5 mt-6 bg-textGreen text-white rounded-md hover:bg-textHover transition"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
