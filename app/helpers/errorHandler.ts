/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../models/customError';
import { RequestExtended } from '../interfaces/global';

// Custom Error Object
export const customError = (
	err: CustomError,
	req: RequestExtended,
	res: Response,
	next: NextFunction
) => {
	const error = new CustomError(err.status, err.message, err.additionalInfo);
	console.log(`Error while solving Request Method: ${req.method} Url: ${req.originalUrl} of UserId: ${req?.user?.id} failed with status code: ${error.status} message: ${JSON.stringify(error.message)} Error: ${err}`, err)

	return res.status(error.status).json({
		error: err,
		message: error.status == 500 ? 'Something went wrong' : error.message,
		responseStatus: error.status,
	});
};

// 404 Not Found Error
export const notFound = (req: Request, res: Response, next: NextFunction) => {
	const error = new CustomError(404, `Path not found`);
	next(error);
};
