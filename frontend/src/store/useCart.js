import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const cartVariable = create((set, get) => ({
  isLoggedIn: false,
  userInfo: null,
  loginRedirect: null,
  itemQuantityZomato: {},
  itemQuantitySwiggy: {},
  cartSwiggy: [],
  cartZomato: [],
  SwiggyCoupon: { newUser: [], existingUser: [] },
  ZomatoCoupon: { newUser: [], existingUser: [] },
  signup: async (name, phoneNumber, email, password) => {
    try {
      const res = await axiosInstance.post('/auth/signup', {
        name,
        phoneNumber,
        email,
        password,
      });
      set({ isLoggedIn: true });
      get().getCoupon();
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
      set({ userInfo: res.data.user });
      get().getCoupon();
    } catch (error) {
      set({ isLoggedIn: false });
      set({ userInfo: null });
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.get('/auth/logout');
      set({ isLoggedIn: false });
      set({ userInfo: null });
      set({ loginRedirect: null });
      set({ itemQuantityZomato: {} });
      set({ itemQuantitySwiggy: {} });
      set({ cartSwiggy: [] });
      set({ cartZomato: [] });
      set({ couponsList: [] });
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
    }
    if (item.platform === 'Zomato') {
      existingItem = get().cartZomato.find((obj) => obj.id === item.id);
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
      const existingQty = get().itemQuantitySwiggy[item.id] || 0;
      const newQty =
        op === '+' ? existingQty + 1 : Math.max(0, existingQty - 1);

      set((state) => ({
        itemQuantitySwiggy: {
          ...state.itemQuantitySwiggy,
          [item.id]: newQty,
        },
      }));
      if (newQty === 0) {
        set((state) => ({
          cartSwiggy: state.cartSwiggy.filter((obj) => obj.id !== item.id),
        }));
      }
    } else {
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

  getCoupon: async () => {
    try {
      const res = await axiosInstance.get('/auth/coupons');
      const list = get().processingList(res.data.couponData);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  },

  processingList: (List) => {
    //console.log(List);
    List.forEach((item) => {
      if (item.platforms.includes('Swiggy')) {
        if (item.user_type === 'new_user') {
          set((state) => ({
            SwiggyCoupon: {
              ...state.SwiggyCoupon,
              newUser: [...state.SwiggyCoupon.newUser, item],
            },
          }));
        } else if (item.user_type === 'existing_user') {
          set((state) => ({
            SwiggyCoupon: {
              ...state.SwiggyCoupon,
              existingUser: [...state.SwiggyCoupon.existingUser, item],
            },
          }));
        } else {
          set((state) => ({
            SwiggyCoupon: {
              ...state.SwiggyCoupon,
              newUser: [...state.SwiggyCoupon.newUser, item],
            },
          }));
          set((state) => ({
            SwiggyCoupon: {
              ...state.SwiggyCoupon,
              existingUser: [...state.SwiggyCoupon.existingUser, item],
            },
          }));
        }
      }
      if (item.platforms.includes('Zomato')) {
        if (item.user_type === 'new_user') {
          set((state) => ({
            ZomatoCoupon: {
              ...state.ZomatoCoupon,
              newUser: [...state.ZomatoCoupon.newUser, item],
            },
          }));
        } else if (item.user_type === 'existing_user') {
          set((state) => ({
            ZomatoCoupon: {
              ...state.ZomatoCoupon,
              existingUser: [...state.ZomatoCoupon.existingUser, item],
            },
          }));
        } else {
          set((state) => ({
            ZomatoCoupon: {
              ...state.ZomatoCoupon,
              newUser: [...state.ZomatoCoupon.newUser, item],
            },
          }));
          set((state) => ({
            ZomatoCoupon: {
              ...state.ZomatoCoupon,
              existingUser: [...state.ZomatoCoupon.existingUser, item],
            },
          }));
        }
      }
    });
  },
}));
