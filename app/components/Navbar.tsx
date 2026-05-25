import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-10">
      <Link to="/">
        <p className="text-3xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </div>
  );
};
export default Navbar;
