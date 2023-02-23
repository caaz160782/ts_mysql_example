import {Sequelize} from 'sequelize';

const db = new Sequelize(
             "node",
             "userdb",
             "123456",
            {
                dialect:'mysql',
                host: "127.0.0.1",                
                port: 3306,
                 // logging: false,
            });

export default db;