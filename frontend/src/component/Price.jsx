import React, { useEffect, useState } from 'react';
import {
  deliveryRate,
  DiscountCalculation,
  gstrate,
  platformfee,
} from '../lib/utils.js';
import { cartVariable } from '../store/useCart.js';

const Price = ({ platform, cart, itemQuantity }) => {
  const { userInfo, SwiggyCoupon, ZomatoCoupon } = cartVariable();
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountValue, setDiscountValue] = useState(0);
  //console.log('Swiggy', SwiggyCoupon, 'Zomato', ZomatoCoupon);

  const itemCost = cart.reduce((acc, item) => {
    const qty = itemQuantity[item.id];
    return acc + item.price * qty;
  }, 0);

  const gstAmount = (gstrate / 100) * itemCost;
  const platformCharge = platformfee[platform] || 0;
  const deliveryCharge = cart.reduce(
    (acc, item) => acc + (item.distance || 0) * (deliveryRate[platform] || 0),
    0
  );

  const total = Number(
    itemCost + gstAmount + platformCharge + deliveryCharge
  ).toFixed(2);

  useEffect(() => {
    const inputDate = new Date(userInfo.createdAt);
    const now = new Date();
    const diffInMs = now - inputDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    let result;
    if (platform === 'Swiggy') {
      result =
        diffInDays === 3
          ? DiscountCalculation(SwiggyCoupon.newUser, itemCost)
          : DiscountCalculation(SwiggyCoupon.existingUser, itemCost);
    } else if (platform === 'Zomato') {
      result =
        diffInDays === 3
          ? DiscountCalculation(ZomatoCoupon.newUser, itemCost)
          : DiscountCalculation(ZomatoCoupon.existingUser, itemCost);
    }

    if (result) {
      setDiscountValue(Number(result.discountValue.toFixed(2)));
      setAppliedCoupon(result.appliedCoupon);
    }
  }, [platform, itemCost, userInfo.createdAt]);

  return (
    <div className="flex flex-col space-y-5 p-5">
      <div className="text-2xl font-bold">{platform}</div>
      <div className="flex justify-between items-center w-full">
        <div>Total cost all food item :</div>
        <div>₹{itemCost}</div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div>GST :</div>
        <div>{gstrate}%</div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div>Platform Charge :</div>
        <div>₹ {platformCharge}</div>
      </div>

      <div className="flex justify-between items-center w-full">
        <div>Delivery Charge :</div>
        <div>₹{deliveryCharge.toFixed(2)}</div>
      </div>

      <div className="flex justify-center">
        <hr className="w-11/12 h-2" />
      </div>

      <div className="flex justify-between items-center w-full font-bold">
        <div>Overall cost : </div>
        <div>₹{itemCost === 0 ? 0 : (total - discountValue).toFixed(2)}</div>
      </div>

      {appliedCoupon && (
        <div className="flex justify-between items-center w-full font-bold">
          <div>Coupon Applied</div>
          <div>{appliedCoupon.code}</div>
        </div>
      )}

      {discountValue > 0 && (
        <div className="flex justify-between items-center w-full font-bold">
          <div>Discount</div>
          <div>₹{discountValue}</div>
        </div>
      )}
    </div>
  );
};

export default Price;
