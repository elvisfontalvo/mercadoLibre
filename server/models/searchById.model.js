/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Search by Id Model
 *
 */

var mongoose = require('mongoose');
const Item = require('./item.model');
const Author = require('./author.model');

const SearchSchema  = new mongoose.Schema({
    author: Author.schema,
    item: Item.schema
}, { _id: false})

const SearchById = mongoose.model('SearchById', SearchSchema)

module.exports = SearchById;