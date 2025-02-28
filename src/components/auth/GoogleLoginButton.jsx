import { assets } from "../../assets/assets";
import { auth, provider, signInWithPopup } from "./firebase";
// import FaGoogle from "react-icons/fa6";
import React from "react";
const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
        <button
          onClick={handleGoogleLogin}
          className="text-base px-6 py-1 md:px-8 md:py-1.5 mt-6 bg-textGreen text-white rounded-md hover:bg-textHover transition"
        >
        {/* <img src= {assets.google} alt="google" className="w-5 h-5 mr-2"  /> */}
          Sign in with Google
        </button>

  );
};

export default GoogleLoginButton;
