const Koa = require('koa')
const routes = require('../routes')

const app = module.exports = new Koa()

app.use(routes)
