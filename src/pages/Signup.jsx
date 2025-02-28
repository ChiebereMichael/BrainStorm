import React from "react";
import { assets } from "../assets/assets";
import Form from "../components/auth/Form";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* left Side Form */}
      <div className="w-full xl:w-1/2 flex bg-back">
        <Form />
      </div>
      {/* right Side Image (Hidden on small screens) */}
      <div className="hidden md:hidden xl:flex xl:w-1/2  items-center justify-center bg-light">
        <img
          src={assets.illustration}
          alt="Signup Illustration"
          className="w-full  max-w-md"
        />
      </div>
    </div>
  );
};

export default Signup;
