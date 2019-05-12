const Koa = require('koa')
const routes = require('./routes')

const { PORT } = process.env
const app = new Koa()

app.use(routes)

module.exports = app.listen(PORT)
