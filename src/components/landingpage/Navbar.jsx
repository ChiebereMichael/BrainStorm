import React from "react";
// import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 pt-5 w-full">
      <div className="flex ">
        {/* <img src={assets.logo} alt="logo"className="w-6 h-auto rounded-xl"  /> */}
        <h2 className="text-textGreen text-xl md:text-2xl font-extrabold">BrainStorm</h2>
      </div>
      <Button/>
    </nav>
  );
};

export default Navbar;
