/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Item Model
 *
 */

var mongoose = require('mongoose');
const Price = require('./price.model');

const ItemSchema  = new mongoose.Schema({
    id: String,
    title: String,
    price: Price.schema,
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
}, { _id: false})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item;