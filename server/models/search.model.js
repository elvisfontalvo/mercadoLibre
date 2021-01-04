/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Search Model
 *
 */

var mongoose = require('mongoose');
const Item = require('./item.model');
const Author = require('./author.model');

const SearchSchema  = new mongoose.Schema({
    author: Author.schema,
    categories: [String],
    items: [Item.schema]
}, { _id: false})

const Search = mongoose.model('Search', SearchSchema)

module.exports = Search;