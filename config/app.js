const Koa = require('koa')

const { port } = require('./environment')
const routes = require('./routes')

const app = new Koa()

app.use(routes)

module.exports = app.listen(port)
