import React from 'react';
import iconSwiggy from '../assets/swiggy.svg';
import iconZomato from '../assets/zomato.svg';

const MenuCard = ({ menuData }) => {
  let id = 0;
  return (
    <div className="grid grid-cols-2 gap-8 p-4">
      {/* Left Section */}
      <div className="w-full p-6">
        {menuData.map((item) => (
          <div
            key={id++}
            className="flex flex-col space-y-2 m-4 p-4 hover:scale-105 transition-transform bg-black text-white opacity-90 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <img
                src={iconSwiggy}
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm text-gray-300">{item.description}</p>
            <p className="text-green-400 font-medium">₹{item.price / 100}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full p-6">
        {menuData.map((item) => (
          <div
            key={id++}
            className="flex flex-col space-y-2 m-4 p-4 hover:scale-105 transition-transform bg-black text-white opacity-90 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <img
                src={iconZomato}
                className="w-6 h-6"
              />
            </div>
            <p className="text-sm text-gray-300">{item.description}</p>
            <p className="text-green-400 font-medium">
              ₹{(item.price + Math.floor(Math.random() * 1000)) / 100}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
