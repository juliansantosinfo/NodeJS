var express = require('express');
var router = express.Router();

var addressController = require('../controllers/AddressController');

router.post('/' , addressController.save);

router.delete('/', addressController.remove);

router.put('/', addressController.update);

router.get('/', addressController.list);

module.exports  = router