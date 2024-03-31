import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[#0000005a] p-3 z-30 backdrop-blur-sm flex justify-between items-center">
      <h1 className="text-2xl">DashBoard</h1>
      <div className="flex gap-3">
        <Link to="/">
          <button className="bg-[#ffffff2a] px-3 py-2 rounded-lg hover:ring-white hover:ring-2 transition-all">
            Home
          </button>
        </Link>
        <Link to="/products">
          <button className="bg-[#ffffff2a] px-3 py-2 rounded-lg hover:ring-white hover:ring-2 transition-all">
            Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
