import toast from 'react-hot-toast';
import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';

export const dataVariable = create((set, get) => ({
  islocationSet: false,
  restaurantData: null,
  menuData: null,
  couponDetails: {},
  setLocation: async (latitude, longitude) => {
    try {
      // const res = await axiosInstance.post('/search/location', {
      //   latitude,
      //   longitude,
      // });
      // const city = res.data.city;
      set({ islocationSet: true });
      // const response = await axiosInstance.get('/auth/coupons');
      // set({ couponDetails: response.data });
      get().getRestaurant('Noida');
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

      const groupedMenu = Object.values(
        data.reduce((acc, item) => {
          const key = item.item_name;

          if (!acc[key]) {
            acc[key] = {
              id: item.item_id.split('_').slice(0, 2).join('_'),
              item_name: item.item_name,
              description: item.description,
              is_veg: item.is_veg,
              rating: item.rating,
              prices: {},
              distance: obj.distance,
            };
          }

          acc[key].prices[item.platform] = item.price;
          return acc;
        }, {})
      );
      set({ menuData: groupedMenu });
    } catch (error) {
      set({ menuData: null });
      toast.error(error?.response?.data?.message || error.message);
    }
  },
}));
