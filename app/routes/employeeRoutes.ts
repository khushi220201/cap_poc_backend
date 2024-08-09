import express from 'express';
import { employeeController } from '../controllers';
const router = express.Router();

// Get All employees
router.get('/', employeeController.getAllEmployees);

export default router;
