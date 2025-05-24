import React, { useEffect } from 'react';
import { cartVariable } from '../store/useCart';
import { deliveryRate, gstrate, platformfee } from '../lib/utils.js';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartZomato,
    cartSwiggy,
    itemQuantitySwiggy,
    itemQuantityZomato,
    addQuantity,
    activeItemPlatform,
    couponDetails,
  } = cartVariable();
  const navigate = useNavigate();
  const handleDecrement = (item) => {
    addQuantity(item, '-');
  };
  const handleIncrement = (item) => {
    addQuantity(item, '+');
  };

  return (
    <>
      {cartSwiggy.length === 0 && cartZomato.length === 0 ? (
        <div className="flex py-10 px-8">
          <div className="text-4xl font-bold"> NO ITEM IN CART </div>
        </div>
      ) : (
        <div className="flex gap-5 py-10 px-8">
          <div className="flex flex-col px-6 space-y-5 w-1/2">
            <div className="text-4xl font-bold mb-10">Items Details</div>
            <div className="border-2 border-black rounded-xl space-y-5 p-4">
              <div className=" flex flex-col gap-10">
                {cartSwiggy.length === 0 ? null : (
                  <div className="space-y-4">
                    <p className="text-2xl font-bold">Swiggy</p>
                    {cartSwiggy.map((item, index) => (
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
                              disabled={!itemQuantitySwiggy[item.id]}
                              className="bg-red-400 px-3 py-1 rounded text-white text-xl"
                              onClick={(e) => {
                                handleDecrement(item);
                              }}
                            >
                              −
                            </button>
                            <span className="text-xl font-bold">
                              {itemQuantitySwiggy[item.id]}
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
                )}

                {cartZomato.length === 0 ? null : (
                  <div className="space-y-4">
                    <p className="text-2xl font-bold">Zomato</p>
                    {cartZomato.map((item, index) =>
                      item.platform === 'Zomato' ? (
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
                                disabled={!itemQuantityZomato[item.id]}
                                className="bg-red-400 px-3 py-1 rounded text-white text-xl"
                                onClick={(e) => {
                                  handleDecrement(item);
                                }}
                              >
                                −
                              </button>
                              <span className="text-xl font-bold">
                                {itemQuantityZomato[item.id]}
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
                      ) : null
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                className=" bg-blue-600 text-white p-2 rounded-xl hover:bg-gray-500 transition cursor-pointer"
                onClick={() => navigate('/menu')}
              >
                Add more
              </button>
            </div>
          </div>
          <div className="bg-red-400 text-black w-1/2 rounded-xl">
            <div className="flex flex-col space-y-10 p-2">
              {cartSwiggy.length === 0 ? null : (
                <div className="flex flex-col space-y-5 p-5">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-2xl font-bold">Swiggy</div>
                    <div>Total cost all food item :</div>
                    <div>
                      ₹
                      {cartSwiggy.reduce((acc, item) => {
                        const qty = itemQuantitySwiggy[item.id];
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
                    <div>₹ {platformfee['Swiggy'] || 0}</div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>Delivery Charge :</div>
                    <div>
                      ₹
                      {cartSwiggy
                        .reduce(
                          (acc, item) =>
                            acc +
                            (item.distance || 0) *
                              (deliveryRate['Swiggy'] || 0),
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
                        const itemCost = cartSwiggy.reduce((acc, item) => {
                          const qty = itemQuantitySwiggy[item.id];
                          return acc + item.price * qty;
                        }, 0);

                        if (itemCost === 0) return 0;

                        const gstAmount = (gstrate / 100) * itemCost;
                        const platformCharge = platformfee['Swiggy'] || 0;
                        const deliveryCharge = cartSwiggy.reduce(
                          (acc, item) =>
                            acc +
                            (item.distance || 0) *
                              (deliveryRate['Swiggy'] || 0),
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
              )}

              {cartZomato.length === 0 ? null : (
                <div className="flex flex-col space-y-5 p-5">
                  <div className="font-bold text-2xl">Zomato</div>
                  <div className="flex justify-between items-center w-full">
                    <div>Total cost all food item :</div>
                    <div>
                      ₹
                      {cartZomato.reduce((acc, item) => {
                        const qty = itemQuantityZomato[item.id];
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
                    <div>₹ {platformfee['Zomato'] || 0}</div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>Delivery Charge :</div>
                    <div>
                      ₹
                      {cartZomato
                        .reduce(
                          (acc, item) =>
                            acc +
                            (item.distance || 0) *
                              (deliveryRate['Zomato'] || 0),
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
                        const itemCost = cartZomato.reduce((acc, item) => {
                          const qty = itemQuantityZomato[item.id];
                          return acc + item.price * qty;
                        }, 0);

                        if (itemCost === 0) return 0;

                        const gstAmount = (gstrate / 100) * itemCost;
                        const platformCharge = platformfee['Zomato'] || 0;
                        const deliveryCharge = cartZomato.reduce(
                          (acc, item) =>
                            acc +
                            (item.distance || 0) *
                              (deliveryRate['Zomato'] || 0),
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
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
