import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const cartVariable = create((set, get) => ({
  isLoggedIn: false,
  loginRedirect: null,
  itemQuantityZomato: {},
  itemQuantitySwiggy: {},
  cartSwiggy: [],
  cartZomato: [],
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
    let existingItem;
    if (item.platform === 'Swiggy') {
      existingItem = get().cartSwiggy.find((obj) => obj.id === item.id);
      if (existingItem) {
        get().addQuantity(item, '+');
      } else {
        set((state) => ({
          cartSwiggy: [...state.cartSwiggy, item],
        }));
        get().addQuantity(item, '+');
      }
    } else {
      existingItem = get().cartZomato.find((obj) => (obj.id = item.id));
      if (existingItem) {
        get().addQuantity(item, '+');
      } else {
        set((state) => ({
          cartZomato: [...state.cartZomato, item],
        }));
        get().addQuantity(item, '+');
      }
    }
  },

  addQuantity: (item, op) => {
    if (item.platform === 'Swiggy') {
      // 1) compute new qty
      const existingQty = get().itemQuantitySwiggy[item.id] || 0;
      const newQty =
        op === '+' ? existingQty + 1 : Math.max(0, existingQty - 1); // never negative

      // 2) update qty map
      set((state) => ({
        itemQuantitySwiggy: {
          ...state.itemQuantitySwiggy,
          [item.id]: newQty,
        },
      }));

      // 3) if it hit zero, remove from cartSwiggy
      if (newQty === 0) {
        set((state) => ({
          cartSwiggy: state.cartSwiggy.filter((obj) => obj.id !== item.id),
        }));
      }
    } else {
      // same for Zomato
      const existingQty = get().itemQuantityZomato[item.id] || 0;
      const newQty =
        op === '+' ? existingQty + 1 : Math.max(0, existingQty - 1);

      set((state) => ({
        itemQuantityZomato: {
          ...state.itemQuantityZomato,
          [item.id]: newQty,
        },
      }));

      if (newQty === 0) {
        set((state) => ({
          cartZomato: state.cartZomato.filter((obj) => obj.id !== item.id),
        }));
      }
    }
  },

  setLoginRedirect: (path) => set({ loginRedirect: path }),
}));
