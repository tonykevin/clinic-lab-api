const Koa = require('koa')
const Router = require('koa-router')

const { routes } = require('../config/')

const app = new Koa()
const router = new Router()

app.use(routes(router))

module.exports = app
