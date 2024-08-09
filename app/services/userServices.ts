/* eslint-disable no-mixed-spaces-and-tabs */
import {
	userRepository
} from '../repositories';

class UserServices {
	// Get all users
	async getAllUsers(
		search?: string,
	) {
		try {
			
			// Conditions for search
			const searchCondition = search
				? {
					OR: [
						{
							firstName: {
								mode: 'insensitive',
								contains: search as string,
							},
						},
						{
							lastName: {
								mode: 'insensitive',
								contains: search as string,
							},
						},
						{
							email: { contains: search as string, mode: 'insensitive' },
						},
					],
				}
				: {};

			// Get all users
			const users = await userRepository.getAll(
				searchCondition	
			);
			return { users };
		} catch (err) {
			throw err;
		}
	}
}

export default new UserServices();
