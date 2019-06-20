const express = require('express')
const router = express.Router()
const path = require('path')

//paths in here are relevant to the invitees which include selecting allergies from a drop down menu, submitting allergies and adding comments for other allergies

// use path method that has been required from node to find path for allergy-list.html
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'views', 'allergies-list.html'))
  });


module.exports = router