class Users {
  list (ctx) {
    ctx.body = {
      ok: true,
      users: [
        {
          name: 'Albert Einstein',
          birth: '03-14-1879'
        },
        {
          name: 'Isaac Newton',
          birth: '01-04-1643'
        }
      ]
    }
  }
}

module.exports = new Users()
