const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello World. its lit\n')
})

server.listen(port, hostname, () => {
    console.log('server running at http://${127.0.0.1}:${3001}/')
})








// const express = require('express')
// const app = express()

// app.get('/', (res, req) => {
//     res.send('Hi')
// })