const express = require('express')
const cors = require('cors')

const { getUser, postUser, putUser } = require('./controllers')

const { authenticateLogin } = require('./middlewares')

const server = express()

server.use(express.json())
server.use(cors())

server.post('/', postUser)

server.use(authenticateLogin)

server.get('/', getUser)
server.put('/', putUser)

server.listen(3001, () => console.log('Server running.'))

// Connecting to Database
const connectDb = require('./database/connectDb')
connectDb()
