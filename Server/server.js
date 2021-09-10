//construção do servidor
const express = require('express')
const server = express()

server.get("/", function(req, res) {
    return res.send("hi!")
})

server.listen(5000, function () {
    console.log("server is running")
})