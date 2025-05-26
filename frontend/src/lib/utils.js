export const platformfee = {
  Swiggy: 10,
  Zomato: 12,
};

export const gstrate = 5;

export const deliveryRate = {
  Swiggy: 8,
  Zomato: 10,
};

export const DiscountCalculation = (couponList, itemCost) => {
  let bestDiscount = 0;
  let bestCoupon = null;

  couponList.forEach((coupon) => {
    if (parseFloat(coupon.min_order_value) <= itemCost) {
      let discount = 0;

      if (coupon.discount_type === 'flat') {
        discount = parseFloat(coupon.discount_value) || 0;
      } else if (coupon.discount_type === 'percentage') {
        discount = (parseFloat(coupon.discount_value) / 100) * itemCost || 0;
      }

      if (discount > bestDiscount) {
        bestDiscount = discount;
        bestCoupon = coupon;
      }
    }
  });

  return {
    discountValue: bestDiscount,
    appliedCoupon: bestCoupon,
  };
};
