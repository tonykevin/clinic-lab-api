require('./config/env')
const app = require('./app')

const { PORT } = process.env

app.listen(PORT)
