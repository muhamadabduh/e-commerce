const router = require('express').Router()
const CartController = require('../controllers/CartController')

router.post('/', CartController.create)

module.exports = router