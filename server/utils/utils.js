/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * 
 * Sets of functions that can be used throughout the project
 */

var SearchService = require('../services/search.service')
var mongoose = require('mongoose');
var Items = require('../models/items.model')
var Item = require('../models/item.model')
var Search = require('../models/search.model')
var Author = require('../models/author.model')

/*
* Function that maps the information provided by the MercadoLibre API 
* and returns the object (List of Items) with the requested structure.
*/
exports.setDataItems = async function(data) {
    var items = [];
    for (const item of data) {
        const currency = await SearchService.getCurrency(item.currency_id);
        let newItem = new Item({
            id: item.id,
            title: item.title,
            price: {
                currency: currency[0].symbol,
                amount: item.price,
                decimals: currency[0].decimal_places
            },
            picture: item.thumbnail.replace(/\-[A-Z]\./g, '-H.'),
            condition: item.condition == "used" ? "Usado" : "Nuevo",
            free_shipping: item.shipping.free_shipping
        });
        items.push(newItem)
    }
    items = await Promise.all(items);
    return items
}
/*
* Function that maps the information of the categories provided 
* by the MercadoLibre API
*/

exports.getCategories = async function(data) {
    var categories = [];
    var filters = data[0].values[0];
    if (filters.path_from_root.length > 0) {
        for (const filter of filters.path_from_root) {
            categories.push(filter.name)
        }
    }
    return categories
}

/*
* Function that returns the author information
*/
exports.getAuthor = async function() {
    let newAuthor = new Author({
        name: 'Elvis',
        lastname: 'Fontalvo'
    });

    return newAuthor
}

/*
* Function that maps the information provided by the MercadoLibre API 
* and returns the object (Item) with the requested structure.
*/
exports.setDataItem = async function(item) {
    var items = [];

    const currency = await SearchService.getCurrency(item.currency_id);
    let newItem = new Item({
        id: item.id,
        title: item.title,
        price: {
            currency: currency[0].symbol,
            amount: item.price,
            decimals: currency[0].decimal_places
        },
        picture: item.thumbnail.replace(/\-[A-Z]\./g, '-B.'),
        condition: item.condition == "used" ? "Usado" : "Nuevo",
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
    });
    items.push(newItem)

    items = await Promise.all(items);
    return items[0]
}