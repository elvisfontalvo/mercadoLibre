/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Item Service
 * The services contains the endpoint, queries and returning objects or throwing errors
 */


var request = require('request');
var fetch = require('node-fetch');

/*
* Function that maps the information of Item provided 
* by the MercadoLibre API
*/
exports.getItem = async function(id, page, limit) {

    try {
        let films = await Promise.all([
            fetch(`https://api.mercadolibre.com/items/${id}`)
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
        throw Error('Error while Paginating Item')
    }
}
/*
* Function that maps the information of  description's Item provided 
* by the MercadoLibre API
*/
exports.getItemDescription = async function(id, page, limit) {

    try {
        let films = await Promise.all([
            fetch(`https://api.mercadolibre.com/items/${id}/description`)
        ]).then(function(responses) {
            // Get a JSON object from each of the responses
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
        throw Error('Error while Paginating Item Description')
    }
}