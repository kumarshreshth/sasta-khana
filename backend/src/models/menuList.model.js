import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    required: true,
  },
  item_id: {
    type: String,
    unique: true,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  is_veg: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  img_url: {
    type: String,
    default: '',
  },
});

const menuList = mongoose.model('MenuList', menuSchema);

export default menuList;
