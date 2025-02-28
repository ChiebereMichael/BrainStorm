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
          className="text-base px-6 py-1 xl:md:12 md:px-8 md:py-1.5 mt-6 bg-textGreen text-white rounded-md hover:bg-textHover transition"
        >
          Sign in with Google
        </button>

  );
};

export default GoogleLoginButton;
