import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="text-white bg-black opacity-90">
      <div className="flex justify-between items-center">
        {/*Logo*/}
        <div></div>

        {/*navigation-list*/}
        <div className="m-2 p-4">
          <ul className="flex justify-content items-center space-x-6">
            <li className="text-3xl hover:text-emerald-500 cursor-pointer">
              Home
            </li>
            <li className="text-3xl hover:text-emerald-500 cursor-pointer">
              About
            </li>
            <li className="text-3xl hover:text-emerald-500 cursor-pointer">
              Services
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
