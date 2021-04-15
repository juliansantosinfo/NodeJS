var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', userController.list);

router.post('/', userController.save);

router.put("/", userController.update);

router.delete("/", userController.remove);

module.exports = router;
