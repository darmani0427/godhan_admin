var express = require('express')
var mongoose = require('mongoose')
var app = express()

require('./routes.js')(app);

mongoose.connect("mongodb://localhost:27017/gohdan")

app.listen(3000, function() {
    console.log('listening on 3000')
})