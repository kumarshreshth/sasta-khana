import express from 'express';
import {
  login,
  logout,
  signup,
  coupons,
  getUserCoupon,
  addUserCoupon,
} from '../controller/auth.controller.js';
import { isAuthenticated } from '../middleware/authentication.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', isAuthenticated, logout);
router.get('/coupons', isAuthenticated, coupons);
//router.get('/getuserCoupon', isAuthenticated, getUserCoupon);
//router.post('/adduserCoupon', isAuthenticated, addUserCoupon);

export default router;
