import User from '../models/user.model.js';
import Coupon from '../models/coupon.model.js';
import userCoupon from '../models/userCoupon.model.js';
import { generateToken } from '../lib/utils.js';

export const signup = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  if (!name || !phoneNumber || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ name, email });
    if (user)
      return res.status(400).json({ message: 'This user already exist' });

    const newUser = new User({
      name,
      phoneNumber,
      email,
      password,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(200).json({ message: 'New user added' });
    } else {
      res.status(400).json({ message: 'Invalid user Data' });
    }
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'No such user exist' });
    }

    if (user.password != password) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    generateToken(user._id, res);
    res.status(200).json({ user });
  } catch (error) {
    console.log('Error in login controller', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logout successfully' });
  } catch (error) {
    console.log('Error in logout controller', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const coupons = async (req, res) => {
  try {
    const couponData = await Coupon.find({});
    res.status(200).json({ couponData });
  } catch (error) {
    console.log('Error in coupon controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getUserCoupon = async (req, res) => {
  const { couponId } = req.body;
  try {
    const couponExist = await userCoupon.findOne({ couponId });
    if (couponExist) {
      res.status(200).json({ couponExist });
    } else {
      res.status(200).json({ message: 'No such coupon' });
    }
  } catch (error) {
    console.log('Error in getUserCoupon', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const addUserCoupon = async (req, res) => {
  const { couponId } = req.body;
  try {
    const couponExist = await userCoupon.findOne({ couponId });
    if (couponExist) {
      await userCoupon.updateOne({ couponId }, { $inc: { used: 1 } });
      return res.status(200).json({ message: 'Entry Update' });
    } else {
      const coupon = new userCoupon({
        couponId,
        used: 1,
      });

      await coupon.save();
      return res.status(200).json({ message: 'Entry Added' });
    }
  } catch (error) {
    console.log('Error in addUserCoupon', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
