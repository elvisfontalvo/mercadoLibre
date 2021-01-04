/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Items Model
 *
 */

var mongoose = require('mongoose');
const Item = require('../models/item.model');

const ItemsSchema  = new mongoose.Schema({
    items: [Item.schema]
}, { _id: false})

const Items = mongoose.model('Items', ItemsSchema)

module.exports = Items;