/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Item Controller
 * The controllers handles all the logic behind validating request parameters, query, Sending Responses with correct codes
 */

var ItemService = require('../services/item.service')  
var mongoose = require('mongoose');
var Items = require('../models/items.model')
var Item = require('../models/item.model')
var SearchById = require('../models/searchById.model')
var Author = require('../models/author.model')
var Utils = require('../utils/utils')
exports.getItem = async function(req, res, next) {

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 1;
    var id = req.params.id ? req.params.id : '1';
    try {
        const data = await ItemService.getItem(id, page, limit)
        const description = await ItemService.getItemDescription(id, page, limit)
        const item = await Utils.setDataItem(data[0]);
        item.description=description[0].plain_text;
        let newSearch = new SearchById({
        	author: await Utils.getAuthor(),
            item: item
        });
        return res.status(200).json({ status: 200, data: newSearch, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}