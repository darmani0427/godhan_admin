var Account = require('./account.js')
var User = require('./user.js')
var configuration = require('./configuration.js')

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render(__dirname + '/views/index.ejs', {
            error: ''
        })
    })

    app.post('/login', function(req, res) {
        User.findOne({ 'username': req.body.username }, 'username password', function (error, user) {
            if(error || !user) {
                res.render(__dirname + '/views/index.ejs', {
                    error: 'Error! Incorrect username or password'
                })
            } else if (req.body.password == user.password) {
                res.redirect('/accounts')
            } else {
                res.send("Error!")
            }
        });
    })

    app.get('/accounts', function (req, res) {
        Account.find({}, function (error, documents) {
            res.render(__dirname + '/views/accounts.ejs', {
                accounts: documents
            })
        })
    })
};