//Intanciando sequelize
const {Sequelize} = require('sequelize')

const user = 'postgres'
const pass = 'sher'
const dbname = 'lecture'

// Option 1: Passing a connection URI
const dataBase = new Sequelize(`postgres://${user}:${pass}@localhost:5432/${dbname}`)