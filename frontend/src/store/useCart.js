import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const cartVariable = create((set, get) => ({
  isLoggedIn: false,
  loginRedirect: null,
  itemQuantity: {},
  activeItemPlatform: null,
  cart: [],
  signup: async (name, phoneNumber, email, password) => {
    try {
      const res = await axiosInstance.post('/auth/signup', {
        name,
        phoneNumber,
        email,
        password,
      });
      set({ isLoggedIn: true });
    } catch (error) {
      set({ isLoggedIn: false });
      toast.error(error?.response?.data?.message);
    }
  },
  login: async (email, password) => {
    try {
      const res = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      set({ isLoggedIn: true });
    } catch (error) {
      set({ isLoggedIn: false });
      toast.error(error?.response?.data?.message);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.get('/auth/logout');
      set({ isLoggedIn: false });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  },

  addToCart: (item) => {
    if (!get().activeItemPlatform) {
      set({ activeItemPlatform: item.platform });
    }
    set((state) => ({
      cart: [...state.cart, item],
    }));
    get().addQuantity(item, '+');
  },
  addQuantity: (item, op) => {
    const existingQty = get().itemQuantity[item.item_name] || 0;
    const newQty =
      existingQty === 0 ? 1 : op === '+' ? existingQty + 1 : existingQty - 1;
    set((state) => ({
      itemQuantity: {
        ...state.itemQuantity,
        [item.item_name]: newQty,
      },
    }));
  },

  removeFromCart: (itemName) => {
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) => item.item_name !== itemName
      );
      const updatedQty = { ...state.itemQuantity };
      delete updatedQty[item.item_name];

      return {
        cart: updatedCart,
        itemQuantity: updatedQty,
      };
    });
  },

  setLoginRedirect: (path) => set({ loginRedirect: path }),
}));
