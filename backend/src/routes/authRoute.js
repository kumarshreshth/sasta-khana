import express from 'express';
import {
  login,
  logout,
  signup,
  coupons,
} from '../controller/auth.controller.js';
import { isAuthenticated } from '../middleware/authentication.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', isAuthenticated, logout);
//router.get('/coupons', isAuthenticated, coupons);

export default router;
