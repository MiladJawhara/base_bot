import { ConnectionOptions } from "typeorm";

const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT
} = process.env;


export const connectionConfigs: ConnectionOptions = {
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        "src/db/models/*",
    ],
    migrations: [
        "src/db/migrations/*"
    ]
};