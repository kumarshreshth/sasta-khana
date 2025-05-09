import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  coupon_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discount_type: {
    type: String,
    required: true,
  },
  discount_value: {
    type: String,
    default: '',
  },
  min_order_value: {
    type: String,
    required: true,
  },
  valid_from: {
    type: String,
    required: true,
  },
  valid_till: {
    type: String,
    required: true,
  },
  platforms: {
    type: [String],
    required: true,
  },
  usage_limit: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    required: true,
  },
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;
