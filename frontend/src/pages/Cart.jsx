import React from 'react';
import { cartVariable } from '../store/useCart';
import { deliveryRate, gstrate, platformfee } from '../lib/utils.js';

const Cart = () => {
  const { cart, itemQuantity, addQuantity, activeItemPlatform } =
    cartVariable();
  const handleDecrement = (item) => {
    addQuantity(item, '-');
  };
  const handleIncrement = (item) => {
    addQuantity(item, '+');
  };
  return (
    <div className="flex gap-5 py-10 px-8">
      <div className="flex flex-col px-6 space-y-5 w-1/2">
        <div className="text-4xl font-bold mb-10">Items Details</div>
        <div className="border-2 border-black rounded-xl space-y-5 p-4">
          {' '}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full"
            >
              <div className="text-xl font-bold">{item.item_name}</div>
              <div className="flex space-x-4 items-center text-lg">
                <div>&#8377; {item.price}</div>
                <div className="flex items-center space-x-2">
                  <button
                    disabled={!itemQuantity[item.item_name]}
                    className="bg-red-400 px-3 py-1 rounded text-white text-xl"
                    onClick={(e) => {
                      handleDecrement(item);
                    }}
                  >
                    −
                  </button>
                  <span className="text-xl font-bold">
                    {itemQuantity[item.item_name]}
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
      <div className="bg-red-400 text-black w-1/2 rounded-xl">
        <div className="flex flex-col space-y-5 p-5">
          <div className="flex justify-between items-center w-full">
            <div>Total cost all food item :</div>
            <div>
              ₹
              {cart.reduce((acc, item) => {
                const qty = itemQuantity[item.item_name];
                return acc + item.price * qty;
              }, 0)}
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div>GST :</div>
            <div>{gstrate}%</div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div>Platform Charge :</div>
            <div>₹ {platformfee[activeItemPlatform] || 0}</div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div>Delivery Charge :</div>
            <div>
              ₹
              {cart
                .reduce(
                  (acc, item) =>
                    acc +
                    (item.distance || 0) *
                      (deliveryRate[activeItemPlatform] || 0),
                  0
                )
                .toFixed(2)}
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-11/12 h-2" />
          </div>

          <div className="flex justify-between items-center w-full">
            <div>Overall cost : </div>
            <div>
              ₹
              {(() => {
                const itemCost = cart.reduce((acc, item) => {
                  const qty = itemQuantity[item.item_name];
                  return acc + item.price * qty;
                }, 0);

                if (itemCost === 0) return 0;

                const gstAmount = (gstrate / 100) * itemCost;
                const platformCharge = platformfee[activeItemPlatform] || 0;
                const deliveryCharge = cart.reduce(
                  (acc, item) =>
                    acc +
                    (item.distance || 0) *
                      (deliveryRate[activeItemPlatform] || 0),
                  0
                );

                return (
                  itemCost +
                  gstAmount +
                  platformCharge +
                  deliveryCharge
                ).toFixed(2);
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
