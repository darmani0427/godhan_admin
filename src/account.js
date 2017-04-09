var mongoose = require('mongoose')

var accountSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    credit_card: String
}, { collection: 'account' })

var Account = mongoose.model('Account', accountSchema)

module.exports = Account