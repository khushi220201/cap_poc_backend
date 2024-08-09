import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Env file configuration
function config(Env: any) {
	return {
		port: Env?.PORT,
		routeBasePath: Env?.ROUTE_BASE_PATH,
	};
}

export default {
	...config(process.env),
};
