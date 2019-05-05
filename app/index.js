const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  ctx.body = 'Clinic laboratory API'
})

module.exports = app
