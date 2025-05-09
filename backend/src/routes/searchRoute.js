import express from 'express';
import { isAuthenticated } from '../middleware/authentication.js';
import { restaurant, menu, location } from '../controller/search.controller.js';

const router = express.Router();

router.post('/location', location);
router.post('/restaurant', restaurant);
router.post('/menu', menu);

export default router;
