var mongoose = require('mongoose')

var accountSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String,
    email: String,
    credit_card: String,
    expiry_date: String
}, { collection: 'account' })

module.exports = mongoose.model('Account', accountSchema)