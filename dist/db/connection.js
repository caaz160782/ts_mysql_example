"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("node", "userdb", "123456", {
    dialect: 'mysql',
    host: "127.0.0.1",
    port: 3306,
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map