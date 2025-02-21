import React from 'react';
import { fetchMenu } from '../api';

const RestaurantCard = ({
  data,
  isError,
  setError,
  errorValue,
  setErrorValue,
  menuData,
  setMenuData,
  menu,
  setMenu,
}) => {
  const OpenMenu = async (item) => {
    if (item.open) {
      try {
        const response = await fetchMenu(item.id);
        console.log(response);
        setMenuData(response);
        setMenu(true);
        setError(false);
      } catch (error) {
        setError(true);
        setErrorValue(error);
      }
    }
  };

  return (
    <div className="m-16">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-black bg-opacity-90 text-white p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform opacity-90"
              onClick={() => OpenMenu(item)}
            >
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-300">
                {item.areaName}, {item.locality}
              </p>
              <div className="flex justify-between items-center text-sm mt-2">
                <p>
                  <i className="fa fa-star text-yellow-500 mr-1"></i>
                  {item.rating}
                </p>
                <p>{item.time.slaString}</p>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                {item.cuisines.join(', ')}
              </p>
              <div className="mt-2">
                <p className="text-sm mt-1">
                  {item.open ? (
                    <span className="text-green-500 font-semibold">Open</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Closed</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-xl text-white text-center">No items available</div>
      )}
    </div>
  );
};

export default RestaurantCard;
