const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.send('Hello World')
  });

// enter routes.use here from app.js file

module.exports = router