const Router = require('koa-router')
const userRoutes = new Router({ prefix: '/users' })

userRoutes.get('/', ctx => {
  ctx.body = 'Users'
})

module.exports = userRoutes.routes()
