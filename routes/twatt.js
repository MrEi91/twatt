'use strict'
const express = require('express')
const router = express.Router()
const controllers = require('../controllers/twatt')

router.post('/search', controllers.twitterSearch)

module.exports = router
