import React from "react";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
// import { PiThreadsFill } from 'react-icons/pi';
function Footer() {
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row md:justify-between xl:justify-between text-white mx-10 mt-10 pb-10">
        <div className="text-sm mb-3 text-center md:text-left xl:text-left">
          <p>&copy; 2025 BrainStorm.</p>
          <p className="text-textGreen">Powered by MikeBytes Technologies</p>
          <p>All rights reserved.</p>
        </div>
        <div className="flex space-x-4  justify-center md:justify-end xl:justify-end">
          <FaXTwitter size={24} className="hover:text-textGreen" />
          <FaInstagram size={24} className="hover:text-textGreen" />
          <FaGithub size={24} className="hover:text-textGreen" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
