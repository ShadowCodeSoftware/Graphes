global.__basedir = __dirname;
const port = 3000
const express = require('express')
const app = express()
require('./databases/neo4j')


// Server
app.listen(process.env.port, () => {
    console.log(`My backend started on the port http://127.0.0.1:${port}`)
})