const knex = require('knex')
const configuration = require('../../knexfile')

const env = process.env.NODE_ENV === 'test' ? configuration.teste : configuration.development

const connection = knex(configuration.development)

module.exports = connection
