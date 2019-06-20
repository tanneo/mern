const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const inviteeRoutes = require('./routes/invitee')

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes)
app.use(inviteeRoutes)

app.listen(port, () => console.log(`Server is listening on port ${port}`))