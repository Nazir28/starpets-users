import { QueryInterface, Sequelize } from 'sequelize';
import { config } from '../utils/config';
import { SequelizeStorage, Umzug, UmzugOptions } from 'umzug';

const sequelize = new Sequelize({
    host: config.db.HOST,
    port: config.db.PORT,
    password: config.db.PASSWORD,
    username: config.db.USERNAME,
    database: config.db.NAME,
    dialect: 'postgres',
});

const migrationConf: UmzugOptions<QueryInterface> = {
    migrations: {
        glob: 'src/db/migrations/*.ts',
        resolve: ({ name, path, context }) => {
            const migration = require(path || '');
            return {
                name,
                up: async () => migration.up(context, Sequelize),
                down: async () => migration.down(context, Sequelize),
            };
        },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
    logger: console,
};

const seedConf: UmzugOptions<QueryInterface> = {
    migrations: {
        glob: 'src/db/seeders/*.ts',
        resolve: ({ name, path, context }) => {
            const migration = require(path || '');
            return {
                name,
                up: async () => migration.up(context, Sequelize),
                down: async () => migration.down(context, Sequelize),
            };
        },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize, tableName: 'seeders' }),
    logger: console,
};

export const runMigrations = async () => {
    const umzug = new Umzug(migrationConf);
    await umzug.up();
};

export const runSeeders = async () => {
    const umzug = new Umzug(seedConf);
    await umzug.up();
};

export { sequelize };
export * from './models/user';
