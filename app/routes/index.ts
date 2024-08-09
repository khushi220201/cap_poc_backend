import express, { Request, Response } from 'express';
import { customError, notFound } from '../helpers/errorHandler';
import userRoutes from './userRoutes';
import employeeRoutes from './employeeRoutes';


const router = express.Router();

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);


router.use('/test', (req: Request, res: Response) => {
	return res.json({ data: 'Hello world!' });
});


router.use(notFound);
router.use(customError);

export default router;
