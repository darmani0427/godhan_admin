var express = require('express')
var mongoose = require('mongoose')
var app = express()

require('./routes.js')(app)
var configuration = require('./configuration.js')

mongoose.connect(configuration.databaseURL)

app.listen(3000, function() {
    console.log('listening on 3000')
})