const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const sequelize = new Sequelize(URI, {
//   dialect: 'mysql',
//   logging: true,
// });

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}

if(config.isProd) {
  options.ssl = {
    rejectUnauthorized: false
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

// (async () => {
//   await sequelize.sync({ force: false }); // Tomar los modelos y crear la estructura en la base de datos
// })();

// sequelize.sync();

module.exports = sequelize;
