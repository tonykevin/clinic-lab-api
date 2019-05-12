const Router = require('koa-router')
const { users } = require('../../app/views')

const userRoutes = module.exports = new Router({
  prefix: '/users'
})

userRoutes.get('/', users.list)
