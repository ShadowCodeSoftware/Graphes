const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./routes/users.routes')
const playlistRoutes = require('./routes/playlists.routes')

const app = express()
const port = 4000

// Middleware
app
    .use(cors())
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

// Routes
app
    .use('/api/auth', userRoutes)
    .use('/api/playlist', playlistRoutes)


// Server
app.listen(port, () => {
    console.log(`My backend started on the port http://localhost:${port}`)
})