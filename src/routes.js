var Account = require('./account.js')

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.render(__dirname + '/views/index.ejs')
    })

    app.post('/login', function(req, res) {
        res.redirect('/accounts')
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