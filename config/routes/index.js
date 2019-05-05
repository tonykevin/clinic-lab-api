module.exports = (router) => {
  router.use(require('./userRoutes'))

  return router.routes()
}
