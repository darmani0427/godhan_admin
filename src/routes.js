var Account = require('./account.js')
var configuration = require('./configuration.js')

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render(__dirname + '/views/index.ejs')
    })

    app.post('/login', function(req, res) {
        console.log(req.body.password)
        if (req.body.password == configuration.adminPassword) {
            res.redirect('/accounts')
        } else {
            res.send("Error!")
        }
    })

    app.get('/accounts', function (req, res) {
        Account.find({}, function (error, documents) {
            console.log(documents)
            res.render(__dirname + '/views/accounts.ejs', {
                accounts: documents
            })
        })
    })
};