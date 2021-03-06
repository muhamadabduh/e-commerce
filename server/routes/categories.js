const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

router.post('/', CategoryController.create)
router.get('/', CategoryController.index)
router.patch('/:id/edit', CategoryController.update)
router.get('/:id', CategoryController.show)

module.exports = router