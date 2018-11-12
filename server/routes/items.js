const router = require('express').Router()
const ItemController = require('../controllers/ItemController')

router.post('/', ItemController.create)
router.get('/', ItemController.index)
router.delete('/:id/delete', ItemController.delete)
router.get('/:username', ItemController.show)

module.exports = router