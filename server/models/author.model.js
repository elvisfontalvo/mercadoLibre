/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Author Model
 *
 */

var mongoose = require('mongoose')

const AuthorSchema  = new mongoose.Schema({
    name: String,
    lastname: String
}, { _id: false})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author;