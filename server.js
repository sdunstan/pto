const express = require('express')
const YAML = require('yamljs')
const { connector } = require('swagger-routes-express')
const api = require('./api')

const makeApp = () => {
    const apiDef = YAML.load('swagger.yaml')
    const connect = connector(api, apiDef)
    const app = express()
    app.use(express.json())
    connect(app)

    return app
}

module.exports = { makeApp }
