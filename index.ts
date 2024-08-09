
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './app/routes';

// Database configuration
import './app/config/db';
import config from './config';

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Import routes
app.use(`/${config.routeBasePath}`, routes);

const PORT = config.port || 8080;

// Server configuration
app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
});
