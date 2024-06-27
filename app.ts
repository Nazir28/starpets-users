import express, { Request, Response } from 'express';
import { runMigrations, runSeeders, sequelize } from './src/db';
import { config } from './src/utils/config';
import { userRouter } from './src/controllers/users';
import { errorHandler } from './src/middlewares/error-handler';

const app = express();
const port = config.server.PORT;

app.use(express.json());
app.use('/api/user', userRouter);
app.use(errorHandler);

(async () => {
    try {
        console.log('Connecting to database...');
        await sequelize.authenticate();
        console.log('Database connected successfully.');

        console.log('Running migrations...');
        await runMigrations();
        console.log('Migrations executed successfully.');

        console.log('Running seeders...');
        await runSeeders();
        console.log('Seeders executed successfully.');

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error starting server:', err);
    }
})();
