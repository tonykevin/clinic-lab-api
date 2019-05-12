const test = require('ava')
const supertest = require('supertest')

const app = require('../../app')
const request = supertest(app)

test('list: should return an object with the users.', async t => {
  const response = await request.get('/users')

  t.is(response.status, 200)
  t.is(response.type, 'application/json')
  t.true(response.ok)
  t.true(Object.keys(response.body).includes('users'))
})
