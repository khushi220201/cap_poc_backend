import { Users } from '@prisma/client';
import { prisma } from '../client/prisma';

class UserRepository {
	
	async getAll(searchCondition?: any) {
		try {
			const users = await prisma.users.findMany({
				where: {
					...searchCondition
				},
			});
			return users;
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}

export default new UserRepository();
