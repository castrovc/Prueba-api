import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'prueba_api01',
    logging: true,
    synchronize: true,
    entities: ['dist/models/**/*.js'],
    subscribers: ['dist/suscribe/**/*.js'],
    migrations: ['dist/migration/**/*.js']

})