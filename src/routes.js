module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send("Hello")
    })

    app.get('/login', function (req, res) {
        res.send('response here with the login page')
    })
};