/**
 * Author: Elvis Fontalvo - Assert Solutions SAS
 * Email: elvis.fontalvo@agmail.com
 * Date: 03-01-2021
 *
 * Api o Serve Route
 * The API routes maps to the Controllers
 */

var express = require('express');
var router = express.Router();

var SearchController = require('../controllers/search.controller')
var ItemController = require('../controllers/item.controller')


router.get('/items', SearchController.getProducts)
router.get('/items/:id', ItemController.getItem)


module.exports = router;