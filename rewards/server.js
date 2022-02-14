const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const DIST_DIR = path.join(__dirname, 'static')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(path.join(__dirname)))
app.use(express.static(DIST_DIR))
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})
app.use('/rewardpicker', express.static(path.join(__dirname, 'static')))

app.get('/api/ping', (req, res) => {
    res.send('pong')
})

app.listen(process.env.PORT || 5002)
