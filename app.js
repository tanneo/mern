const express = require('express')

const app = express()
const port = 3000

app.set("view engine", "ejs")



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))