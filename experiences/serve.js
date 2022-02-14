const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()
var cors = require('cors')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

// Set EJS as templating engine
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '/assets')))
app.use('/contentcreation', express.static(path.join(__dirname)))

require('./routes')(app)

app.listen(process.env.PORT || 5004)
