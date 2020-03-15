const AppConfig = () => {
  switch (process.env.NODE_ENV) {
    case 'production': return require('./production')
    default: return require('./development')
  }
}

module.exports = AppConfig()
