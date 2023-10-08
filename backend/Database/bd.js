const config = require('../Config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: dbConfig.dialect,
  host: dbConfig.host,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  logging: false,
});

module.exports = { db };
