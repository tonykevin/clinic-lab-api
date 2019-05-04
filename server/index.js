require('./config/env')
const Koa = require('koa')

const { PORT } = process.env
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Clinic laboratory API'
})

app.listen(PORT)
