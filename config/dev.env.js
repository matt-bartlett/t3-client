var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_URL: '"http://t3.mattbartlett.net/api"'
  API_URL: '"http://dev.app/api"'
})
