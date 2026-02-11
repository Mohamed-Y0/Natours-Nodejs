import express from 'express';
import {
  getLoginForm,
  getOverview,
  getTour,
} from '../controllers/viewController.js';
import { isLoggedIn } from '../controllers/authController.js';

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

export default router;
