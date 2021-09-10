//construção do servidor
const express = require('express')
const nunjucks = require('nunjucks')

//configuração da template engine
const server = express()

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server
})

server.set("view engine", "html")

server.get("/", function(req, res) {
    return res.render("index")
})

server.listen(5000, function () {
    console.log("server is running")
})