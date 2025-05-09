import React, { useEffect, useState } from 'react';
import { dataVariable } from '../store/useData.js';
import { cartVariable } from '../store/useCart.js';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const MenuCard = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { islocationSet, menuData } = dataVariable();
  const { isLoggedIn, setLoginRedirect, addToCart, activeItemPlatform } =
    cartVariable();
  const navigate = useNavigate();
  const Location = useLocation();

  useEffect(() => {
    if (!islocationSet && !menuData) {
      navigate('/');
    }
  }, [islocationSet, menuData, navigate]);

  const handleClick = (id) => {
    if (isLoggedIn) {
      setSelectedItemId((prev) => (prev === id ? null : id));
    } else {
      setLoginRedirect(Location.pathname);
      navigate('/login');
    }
  };

  const handleAddToCart = (e, item, distance) => {
    e.stopPropagation();
    addToCart(item, distance);
  };
  return (
    <div className="px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-10 text-center">
        Menu List
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {menuData?.map((data) => (
          <div
            key={data.id}
            className="border-1 border-black p-4 rounded-xl hover:scale-102"
            onClick={() => handleClick(data.id)}
          >
            <div className="flex space-x-5">
              <div className="w-1/3">
                <img
                  src="/img1.jpg"
                  className="size-40"
                />
              </div>
              <div className="p-2 w-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold">{data.item_name}</div>
                  <div className="text-xl text-green-400">
                    &#9733; {data.rating}
                  </div>
                </div>
                <div className="text-xl mb-4">{data.description}</div>
                <div className="text-lg font-light mb-4">
                  {data.is_veg ? '🟢 Veg' : '🔴 Non-Veg'}
                </div>
                <div className="space-y-2">
                  <div
                    className={`${
                      selectedItemId == data.id ? 'flex' : 'hidden'
                    } justify-between items-center`}
                  >
                    <div className="text-xl text-red-400">
                      At swiggy for{' '}
                      <span className="text-black">
                        &#8377; {data.prices[1].Swiggy}
                      </span>
                    </div>
                    <div>
                      <button
                        className={`py-1 px-2 rounded-xl text-xl ${
                          activeItemPlatform === 'Zomato'
                            ? 'bg-gray-500'
                            : 'bg-green-400 hover:bg-red-400 cursor-pointer'
                        }`}
                        disabled={activeItemPlatform === 'Zomato'}
                        onClick={(e) =>
                          handleAddToCart(e, {
                            item_name: data.item_name,
                            platform: 'Swiggy',
                            distance: data.distance,
                            price: data.prices[1].Swiggy,
                          })
                        }
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div
                    className={`${
                      selectedItemId == data.id ? 'flex' : 'hidden'
                    } justify-between items-center`}
                  >
                    <div className="text-xl text-red-400">
                      At Zomato for{' '}
                      <span className="text-black">
                        &#8377; {data.prices[0].Zomato}
                      </span>
                    </div>
                    <div>
                      <button
                        className={`py-1 px-2 rounded-xl text-xl ${
                          activeItemPlatform === 'Swiggy'
                            ? 'bg-gray-500'
                            : 'bg-green-400 hover:bg-red-400 cursor-pointer'
                        }`}
                        disabled={activeItemPlatform === 'Swiggy'}
                        onClick={(e) =>
                          handleAddToCart(e, {
                            item_name: data.item_name,
                            platform: 'Zomato',
                            distance: data.distance,
                            price: data.prices[0].Zomato,
                          })
                        }
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
