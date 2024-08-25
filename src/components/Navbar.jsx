import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="lg:mx-20 sm:mx-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl ">
        <a
          href="https://www.linkedin.com/in/abhishek-das-62401a21b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-sky-500" />
        </a>
        <a
          href="https://github.com/IamRonyDas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-neutral-500" />
        </a>
        <a
          href="https://leetcode.com/u/ABHISHEK_DAS_003/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-yellow-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
