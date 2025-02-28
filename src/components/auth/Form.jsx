import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";

function Form() {
  return (
    <div className="flex  items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md mx-22 text-center">
        <h1 className="text-white font-bold text-2xl">Welcome Back</h1>
        <p className="text-textGray text-sm pt-1">Please sign in to continue</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

export default Form;
