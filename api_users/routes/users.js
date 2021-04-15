var express = require('express');
var router = express.Router();

var userController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', userController.list);
router.get('/:user_id', userController.list);

router.post('/', userController.save);

router.put("/", userController.update);

router.delete("/", userController.remove);
router.delete("/all", userController.removeAll);

module.exports = router;
