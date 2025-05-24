import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-200">
      <div className="pl-10 pr-10 pt-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img
                src="/logo.png"
                className="size-20 rounded-full"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center p-4 text-red-600 space-x-6">
            <div className="text-xl p-1 hover:text-black cursor-pointer">
              <Link to="/">HOME</Link>
            </div>
            <div className="text-xl p-1 hover:text-black cursor-pointer">
              <Link to="/about">ABOUT</Link>
            </div>
            <div className="text-xl p-1 hover:text-black cursor-pointer">
              <Link to="/login">LOGIN</Link>
            </div>
            <div className="text-xl p-1 hover:text-black cursor-pointer">
              <Link to="/cart">CART</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
