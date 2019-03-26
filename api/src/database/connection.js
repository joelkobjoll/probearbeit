import {app} from '@/app'

const Sequelize = require('sequelize')
const finale = require('finale-rest')

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT || 3306;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
});

finale.initialize({
    app: app,
    sequelize: db
})