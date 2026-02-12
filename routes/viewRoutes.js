import express from 'express';
import {
  getAccount,
  getLoginForm,
  getOverview,
  getTour,
} from '../controllers/viewController.js';
import { isLoggedIn, protect } from '../controllers/authController.js';

const router = express.Router();

router.get('/', isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getAccount);

export default router;
