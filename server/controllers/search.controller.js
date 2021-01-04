/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Productos o Items Controller
 * The controllers handles all the logic behind validating request parameters, query, Sending Responses with correct codes
 */

var SearchService = require('../services/search.service')
var mongoose = require('mongoose');
var Items = require('../models/items.model')
var Item = require('../models/item.model')
var Search = require('../models/search.model')
var Author = require('../models/author.model')
var Utils = require('../utils/utils')
exports.getProducts = async function(req, res, next) {

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 4;
    var query = req.query.q ? req.query.q : '';
    try {
        const products = await SearchService.getProducts(query, page, limit)
        const items = await Utils.setDataItems(products[0].results);
        const categories = await Utils.getCategories(products[0].filters);
        let newSearch = new Search({
        	author: await Utils.getAuthor(),
            items: items,
            categories: categories
        });
        return res.status(200).json({ status: 200, data: newSearch, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
