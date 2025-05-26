import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { cartVariable } from '../store/useCart';
import { useNavigate } from 'react-router-dom';
import CartItem from '../component/CartItem.jsx';
import Price from '../component/Price.jsx';

const Cart = () => {
  const {
    cartZomato,
    cartSwiggy,
    itemQuantitySwiggy,
    itemQuantityZomato,
    cartReset,
  } = cartVariable();
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/');
  };
  const reset = () => {
    cartReset();
  };

  return (
    <>
      {cartSwiggy.length === 0 && cartZomato.length === 0 ? (
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex justify-center items-center space-x-4">
            <div className="text-4xl font-bold"> NO ITEM IN CART! </div>
            <div
              className=" text-blue-400 hover:text-gray-500 text-4xl font-bold rounded-xl cursor-pointer"
              onClick={handleExplore}
            >
              SHOP NOW
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 py-10 px-8">
          <div className="flex flex-col px-6 space-y-5 w-1/2">
            <div className="text-4xl font-bold mb-10">Items Details</div>
            <div className="border-2 border-black rounded-xl space-y-5 p-4">
              <div className=" flex flex-col gap-10">
                {cartSwiggy.length === 0 ? null : (
                  <CartItem
                    platform="Swiggy"
                    cart={cartSwiggy}
                    itemQuantity={itemQuantitySwiggy}
                  />
                )}

                {cartZomato.length === 0 ? null : (
                  <CartItem
                    platform="Zomato"
                    cart={cartZomato}
                    itemQuantity={itemQuantityZomato}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                className=" bg-blue-600 text-white p-2 rounded-xl hover:bg-gray-500 transition cursor-pointer"
                onClick={() => navigate('/menu')}
              >
                Add more
              </button>
              <button
                className=" bg-blue-600 text-white p-2 rounded-xl hover:bg-gray-500 transition cursor-pointer"
                onClick={() => {
                  reset();
                  toast.success('Item has been ordered');
                }}
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="bg-red-400 text-black w-1/2 rounded-xl">
            <div className="flex flex-col space-y-10 p-2">
              {cartSwiggy.length === 0 ? null : (
                <Price
                  platform="Swiggy"
                  cart={cartSwiggy}
                  itemQuantity={itemQuantitySwiggy}
                />
              )}

              {cartZomato.length === 0 ? null : (
                <Price
                  platform="Zomato"
                  cart={cartZomato}
                  itemQuantity={itemQuantityZomato}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
