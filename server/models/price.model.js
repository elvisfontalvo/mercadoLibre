/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Price Model
 *
 */
var mongoose = require('mongoose')

const PriceSchema  = new mongoose.Schema({
    currency: String,
    amount: Number,
    decimals: Number,
}, { _id: false})

const Price = mongoose.model('Price', PriceSchema)

module.exports = Price;