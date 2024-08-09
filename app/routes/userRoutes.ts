import express from 'express';
import { userController } from '../controllers';
const router = express.Router();

// Get All Users
router.get('/', userController.getAllUsers);

export default router;
