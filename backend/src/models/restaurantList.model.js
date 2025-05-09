import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    unique: true,
    required: true,
  },
  restaurant_name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  img_url: {
    type: String,
    default: '',
  },
});

const restaurantList = mongoose.model('RestaurantList', restaurantSchema);

export default restaurantList;
