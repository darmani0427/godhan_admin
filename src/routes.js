module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render(__dirname + '/views/index.ejs'); 
    })

    app.get('/login', function(req, res) {
        res.render(__dirname + '/views/login.ejs');
    })

    app.post('/login', function (req, res) {
        res.send('hooray login successful!')
    })
};