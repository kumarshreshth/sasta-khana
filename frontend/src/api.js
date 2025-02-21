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
