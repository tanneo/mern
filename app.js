const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: false}))

app.use('/', function (req, res, next) {
    res.send('Hello World')
  });
  

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))