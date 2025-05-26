import React from 'react';
import { cartVariable } from '../store/useCart';

const CartItem = ({ platform, cart, itemQuantity }) => {
  const { addQuantity } = cartVariable();
  const handleDecrement = (item) => {
    addQuantity(item, '-');
  };
  const handleIncrement = (item) => {
    addQuantity(item, '+');
  };
  return (
    <div>
      <div className="space-y-4">
        <p className="text-2xl font-bold">{platform}</p>
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full"
          >
            <div className="text-xl font-bold text-gray-700">
              {item.item_name}
            </div>
            <div className="flex space-x-4 items-center text-lg">
              <div>&#8377; {item.price}</div>
              <div className="flex items-center space-x-2">
                <button
                  disabled={!itemQuantity[item.id]}
                  className="bg-red-400 px-3 py-1 rounded text-white text-xl"
                  onClick={(e) => {
                    handleDecrement(item);
                  }}
                >
                  −
                </button>
                <span className="text-xl font-bold">
                  {itemQuantity[item.id]}
                </span>
                <button
                  className="bg-green-400 px-3 py-1 rounded text-white text-xl"
                  onClick={(e) => {
                    handleIncrement(item);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
