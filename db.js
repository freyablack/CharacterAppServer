// const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.db)


// module.exports = sequelize;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://postgres:hellokinsey@localhost:5432/workout-log-server");

module.exports = sequelize;