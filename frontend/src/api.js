import axios from 'axios';

export const fetchDetails = async (searchValue) => {
  try {
    const result = await axios.post('http://localhost:5000/search', {
      searchValue,
    });
    return result.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
