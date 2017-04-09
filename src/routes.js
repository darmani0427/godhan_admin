var Account = require('./account.js')

module.exports = function (app) {
    app.get('/', function (req, res) {
        Account.find({}, function (error, documents) {
            console.log(documents)
            res.render(__dirname + '/views/accounts.ejs', {
                accounts: documents
            })
        })
    })
};