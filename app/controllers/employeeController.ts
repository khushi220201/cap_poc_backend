import { NextFunction, Response } from 'express';
import { DefaultResponse } from '../helpers/defaultResponseHelper';
import { RequestExtended } from '../interfaces/global';
import employeeServices from '../services/employeeServices';


class EmployeeController {
	// Get All employee
	async getAllEmployees(req: RequestExtended, res: Response, next: NextFunction) {
		try {
			const {
				search,
			} = req.query;

			const { employees } = await employeeServices.getAllEmployees(
				search as string,
				// filter as string,
	
			);

			return DefaultResponse(
				res,
				200,
				'Employees fetched successfully',
				employees
			);
		} catch (err) {
			next(err);
		}
	}

}

export default new EmployeeController();
