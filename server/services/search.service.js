/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Search Service
 * The services contains the endpoint, queries and returning objects or throwing errors
 */

var request = require('request');
var fetch = require('node-fetch');

/*
* Function that maps the information of Products provided 
* by the MercadoLibre API
*/

exports.getProducts = async function(query, page, limit) {

    try {
        let films = await Promise.all([
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${limit}`)
        ]).then(function(responses) {
            return Promise.all(responses.map(function(response) {
                return response.json();
            }));
        }).then(function(data) {
            return data          
        }).catch(function(error) {
            console.log(error);
        });

        //console.log(films)
        return films
        
    } catch (e) {
        throw Error('Error while Paginating Products')
    }
}

/*
* Function that maps the information of currency provided 
* by the MercadoLibre API
*/

exports.getCurrency = async function(id) {

    try {
        let currency = await Promise.all([
            fetch(`https://api.mercadolibre.com/currencies/${id}`)
        ]).then(function(responses) {
            return Promise.all(responses.map(function(response) {
                return response.json();
            }));
        }).then(function(data) {
            return data         
        }).catch(function(error) {
            console.log(error);
        });
        //console.log(currency);
        return currency
        
    } catch (e) {
        throw Error('Error while Paginating Currency')
    }
}

/*
* Function that maps the information of categories provided 
* by the MercadoLibre API
*/
exports.getCategories = async function(id) {

    try {
        let categories = await Promise.all([
            fetch(`https://api.mercadolibre.com/categories/${id}`)
        ]).then(function(responses) {
            return Promise.all(responses.map(function(response) {
                return response.json();
            }));
        }).then(function(data) {
            return data         
        }).catch(function(error) {
            console.log(error);
        });
        return categories
        
    } catch (e) {
        throw Error('Error while Paginating categories')
    }
}