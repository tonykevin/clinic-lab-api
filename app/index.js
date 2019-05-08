const Koa = require('koa')
const routes = require('../config/routes')

const app = module.exports = new Koa()

app.use(routes)
