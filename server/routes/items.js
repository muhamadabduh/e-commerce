const router = require('express').Router()
const ItemController = require('../controllers/ItemController')
const images= require('../helpers/image')

router.post('/', ItemController.create)
router.get('/', ItemController.index)
router.delete('/:id/delete', ItemController.delete)
router.get('/:username', ItemController.show)
router.post('/img/upload', 
    images.multer.single('image'),
    images.sendUploadToGCS ,
    (req,res)=> {
        ItemController.uploadImage(req,res)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }
    )

module.exports = router