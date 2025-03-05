import React from "react";
import { FaBars, FaUser, FaSearch, FaPlusCircle } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="bg-light shadow-md p-2 flex justify-between items-center">
      <div className="flex items-center">
        <button className="lg:hidden mr-4" onClick={onMenuToggle}>
          <FaBars className="text-xl" />
        </button>
        <div className="flex ">
          <img
            src={assets.green}
            alt="logo"
            className="w-8 pr-0.5 h-8 pt-1.1 md:pt-1 rounded-2xl"
          />
          <h2 className="text-textGreen text-xl md:text-2xl font-bold">
            BrainStorm
          </h2>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-textHover cursor-pointer rounded-full flex items-center justify-center">
          <FaPlusCircle className="text-white" size={20} />
        </div>
        <div className="w-8 h-8 bg-textHover cursor-pointer rounded-full flex items-center justify-center">
          <FaSearch className=" text-white" size={18}/>
        </div>
        <div className="w-8 h-8 bg-textHover cursor-pointer rounded-full flex items-center justify-center">
          <FaUser className="text-white" size={18} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
