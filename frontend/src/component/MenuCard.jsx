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
    // if (isLoggedIn) {
    //   setSelectedItemId((prev) => (prev === id ? null : id));
    // } else {
    //   setLoginRedirect(Location.pathname);
    //   navigate('/login');
    // }
    setSelectedItemId((prev) => (prev === id ? null : id));
  };

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    addToCart(item);
  };
  return (
    <div className="px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-700 mb-10 text-center">
        Menu List
      </h1>
      <div className="flex flex-col space-y-10 items-center">
        {menuData?.map((data) => (
          <div
            key={data.id}
            className="border-1 border-black p-4 rounded-xl hover:scale-102 w-4/5"
            onClick={() => handleClick(data.id)}
          >
            <div className="flex space-x-3">
              <div className="w-1/6">
                <img
                  src="/img1.jpg"
                  className="size-40 rounded-xl"
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
                        &#8377; {data.prices['Swiggy']}
                      </span>
                    </div>
                    <div>
                      <button
                        className={`py-1 px-2 rounded-xl text-xl bg-green-400 hover:bg-red-400 cursor-pointer`}
                        onClick={(e) =>
                          handleAddToCart(e, {
                            id: data.id + '1',
                            item_name: data.item_name,
                            platform: 'Swiggy',
                            distance: data.distance,
                            price: data.prices['Swiggy'],
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
                        &#8377; {data.prices['Zomato']}
                      </span>
                    </div>
                    <div>
                      <button
                        className={`py-1 px-2 rounded-xl text-xl bg-green-400 hover:bg-red-400 cursor-pointer`}
                        onClick={(e) =>
                          handleAddToCart(e, {
                            id: data.id + '2',
                            item_name: data.item_name,
                            platform: 'Zomato',
                            distance: data.distance,
                            price: data.prices['Zomato'],
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
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-blue-600 text-white p-4 rounded-full hover:bg-gray-600 cursor-pointer"
          onClick={() => navigate('/cart')}
        >
          <img
            src="./cart.svg"
            className="size-8"
          />
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
