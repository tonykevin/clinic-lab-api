const Router = require('koa-router')
const userRoutes = require('./users/routes')

const router = new Router()

router.use(
  userRoutes.routes(),
  userRoutes.allowedMethods()
)

module.exports = router.routes()
