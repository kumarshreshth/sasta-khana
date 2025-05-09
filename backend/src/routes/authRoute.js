import express from 'express';
import { login, logout, signup } from '../controller/auth.controller.js';
import { isAuthenticated } from '../middleware/authentication.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', isAuthenticated, logout);

export default router;
