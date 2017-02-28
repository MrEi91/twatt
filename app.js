'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let index = require('./routes/index')
let twatt = require('./routes/twatt')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', index)
app.use('/api/twatt', twatt)

app.listen(3000)

module.exports = app
