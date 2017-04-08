var express = require('express')
var mongoose = require('mongoose')
var app = express()

mongoose.connect("mongodb://localhost:27017/gohdan")

app.get('/', function(req, res) {
    res.send("Hello")
})

app.listen(3000, function() {
    console.log('listening on 3000')
})