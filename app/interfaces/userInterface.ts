export interface UserInfo {
	id?: string;
	email: string;
	firstName: string;
	lastName: string;
	address?: string | null;
	dateOfBirth?: Date | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
}
