import mongoose from 'mongoose';

const userCouponSchema = new mongoose.Schema({
  couponId: {
    type: String,
    unique: true,
    required: true,
  },
  used: {
    type: Number,
    required: true,
  },
});

const userCoupon = mongoose.model('UserCoupon', userCouponSchema);

export default userCoupon;
