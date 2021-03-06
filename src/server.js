var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var app = express()

var configuration = require('./configuration.js')

var databasePassword = new Buffer(configuration.databasePassword, 'base64').toString()
var options = {
  user: configuration.databaseUser,
  pass: databasePassword
}
mongoose.connect(configuration.databaseURL, options)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log('listening on 3000')
})

require('./routes.js')(app)