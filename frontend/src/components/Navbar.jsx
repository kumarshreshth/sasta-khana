import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userImage, setUserImage] = useState('placeholder');
  const [isMenuOption, setIsMenuOption] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white bg-black opacity-50 z-50">
      <div className="flex justify-between items-center">
        {/*Logo*/}
        <div></div>

        {/*navigation-list*/}
        <div className="m-3 sm:m-6 p-2 sm:p-4">
          <ul className="hidden sm:flex sm:justify-content sm:items-center space-x-6">
            <li className="text-sm sm:text-3xl hover:text-emerald-500 cursor-pointer">
              Home
            </li>
            <li className="text-sm sm:text-3xl hover:text-emerald-500 cursor-pointer">
              About
            </li>
            <li className="text-sm sm:text-3xl hover:text-emerald-500 cursor-pointer">
              Services
            </li>
          </ul>
        </div>

        {/*Mobile-menu*/}
        <div className="text-sm block sm:hidden">
          <i className="fa fa-bars text-white m-2 p-2"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
