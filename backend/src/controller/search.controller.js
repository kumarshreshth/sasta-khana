import restaurantList from '../models/restaurantList.model.js';
import menuList from '../models/menuList.model.js';

export const restaurant = async (req, res) => {
  try {
    const { location } = req.body;
    const restaurantData = await restaurantList.find({
      location: { $regex: location, $options: 'i' },
    });
    res.status(200).json({ restaurantData });
  } catch (error) {
    console.log('Error in restaurant search controller ', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const menu = async (req, res) => {
  try {
    const { id } = req.body;
    const menuData = await menuList.find({
      restaurant_id: { $regex: id },
    });
    res.status(200).json({ menuData });
  } catch (error) {
    console.log('Error in menu search controller ', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const location = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: 'Latitude and longitude are required' });
    }

    const api_key = process.env.GEOLOCATION_API_KEY;
    const query = `${latitude},${longitude}`;

    const request_url = `https://api.opencagedata.com/geocode/v1/json?key=${api_key}&q=${encodeURIComponent(
      query
    )}&pretty=1&no_annotations=1`;

    const response = await fetch(request_url);
    const data = await response.json();

    if (data?.results?.length > 0) {
      const city = data.results[0].components.city;
      return res.status(200).json({ city });
    } else {
      return res
        .status(404)
        .json({ message: 'No address found for the given coordinates' });
    }
  } catch (error) {
    console.error('Geolocation error:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
