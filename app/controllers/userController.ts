import { NextFunction, Response } from 'express';
import { DefaultResponse } from '../helpers/defaultResponseHelper';
import userServices from '../services/userServices';
import { RequestExtended } from '../interfaces/global';


class UserController {
	// Get All Users
	async getAllUsers(req: RequestExtended, res: Response, next: NextFunction) {
		try {
			const {
				search,
			} = req.query;

			const { users } = await userServices.getAllUsers(
				search as string
			);

			return DefaultResponse(
				res,
				200,
				'Users fetched successfully',
				users
			);
		} catch (err) {
			next(err);
		}
	}

}

export default new UserController();
