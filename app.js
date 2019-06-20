const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const inviteeRoutes = require('./routes/invitee')
const path = require('path')

const app = express()
const port = 3000

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(inviteeRoutes)

//exception error for all pages not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))

})

app.listen(port, () => console.log(`Server is listening on port ${port}`))