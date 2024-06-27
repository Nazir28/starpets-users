import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

interface IConfigDB {
    USERNAME: string;
    PASSWORD: string;
    NAME: string;
    HOST: string;
    PORT: number;
}
interface IConfigServer {
    PORT: number;
}

interface IConfig {
    db: IConfigDB;
    server: IConfigServer;
}

const config: IConfig = {
    server: {
        PORT: parseInt(process.env.PORT || '0000'),
    },
    db: {
        USERNAME: process.env.DB_USERNAME || '',
        PASSWORD: process.env.DB_PASSWORD || '',
        NAME: process.env.DB_NAME || '',
        HOST: process.env.DB_HOST || '',
        PORT: parseInt(process.env.DB_PORT || '0000'),
    },
};

export { config };
