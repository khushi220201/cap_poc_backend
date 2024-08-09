import { Users } from '@prisma/client';
import { prisma } from '../client/prisma';

class EmployeeRepository {
	
	async getAll(searchCondition ?: any){

		try {
			// const employees = await prisma.employee.findMany({
			// 	where: {
			// 		// ...filterConditions,
            //         ...searchCondition
			// 	},
			// });
			const employees = await prisma.$queryRawUnsafe(searchCondition)
			return employees;
		} catch (err) {
			console.log(err);
			throw err;
		}
	}
}

export default new EmployeeRepository();
