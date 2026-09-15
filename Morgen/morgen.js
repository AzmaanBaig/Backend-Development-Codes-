var express = require('express')
var morgan = require('morgan')
const PORT = 3000;
var app = express()

app.use(morgan('combined'))

app.get('/', function(req, res) {
    res.send('hello, world!')
})