/* eslint-disable no-mixed-spaces-and-tabs */
import {
	employeeRepository
} from '../repositories';

class EmployeeServices {
	// Get all employee
	async getAllEmployees(search?: string) {
		try {

			let query = 'SELECT * FROM "Employee"';

			// Add search condition if search parameter is provided
			if (search) {
				query += `
					WHERE
						"fullName" ILIKE '%${search}%' OR
  						"email" ILIKE  '%${search}%'
				`;
			}
		
			// Get all employees
			const employees = await employeeRepository.getAll(query);
			return { employees };
		} catch (err) {
			throw err;
		}
	}
}

export default new EmployeeServices();
