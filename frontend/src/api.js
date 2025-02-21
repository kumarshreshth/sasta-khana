import axios from 'axios';

export const fetchRestaurant = async (searchValue) => {
  try {
    const result = await axios.post('http://localhost:5000/searchRestaurant', {
      searchValue,
    });
    return result.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const fetchMenu = async (restaurantId) => {
  try {
    const result = await axios.post('http://localhost:5000/searchMenu', {
      restaurantId,
    });
    return result.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
