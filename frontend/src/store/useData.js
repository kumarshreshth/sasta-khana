import toast from 'react-hot-toast';
import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';

export const dataVariable = create((set, get) => ({
  islocationSet: false,
  restaurantData: null,
  menuData: null,
  setLocation: async (latitude, longitude) => {
    try {
      const res = await axiosInstance.post('/search/location', {
        latitude,
        longitude,
      });
      const city = res.data.city;
      set({ islocationSet: true });
      get().getRestaurant(city);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  },
  getRestaurant: async (city) => {
    try {
      const res = await axiosInstance.post('/search/restaurant', {
        location: city,
      });
      const data = res.data.restaurantData;
      set({ restaurantData: data });
    } catch (error) {
      set({ restaurantData: null });
      toast.error(error?.response?.data?.message);
    }
  },
  getMenu: async (id, obj) => {
    try {
      const res = await axiosInstance.post('/search/menu', {
        id,
      });
      const data = res.data.menuData;
      const reduceData = data.reduce((acc, item, index) => {
        if (!acc[item.item_name]) {
          acc[item.item_name] = {
            id: index,
            distance: obj.distance,
            item_name: item.item_name,
            prices: [],
            is_veg: item.is_veg,
            description: item.description,
            restaurant_id: item.restaurant_id,
            img_url: item.img_url,
            rating: item.rating,
          };
        }

        acc[item.item_name].prices.push({
          [item.platform]: item.price,
        });

        return acc;
      }, {});

      const filteredData = Object.values(reduceData);

      set({ menuData: filteredData });
    } catch (error) {
      set({ menuData: null });
      toast.error(error?.response?.data?.message);
    }
  },
}));
