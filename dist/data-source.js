"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=data-source.js.map