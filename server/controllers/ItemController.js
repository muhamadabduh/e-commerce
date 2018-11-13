const Item = require('../models/Item')
const jwtHelper = require('../helpers/jwtHelper')
const jwt = require('jsonwebtoken')
const Image = require('../models/Image')

class ItemController {
    static create(req,res){
        let user = jwtHelper.decode(req.headers['token'])
        Item.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            img: req.body.img,
            category: req.body.category,
            owner: user._id
        })
        .then(item=>{
            res.status(201).json({
                item: item,
                message: "succesfully create new item"
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                err: err.message
            })
        })
    }

    static index(req,res){
        
        Item.find()
        .populate('category')
        .populate('owner')
        .then(items=>{
            console.log('=====', items)
            res.status(200).json({
                items:items
            })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error: err.message,
                message: "error fetching items data"
            })
        })
    }

    static show(req,res){
        let user = jwtHelper.decode(req.headers['token'])
        console.log(user)
        Item.find({
            owner: user._id
        })
            .then(items=>{
                res.status(200).json({
                    items: items
                })
            })
            .catch(err=>{
                res.status(500).json({
                    err: err.message,
                    message: "error fetching data item"
                })
            })
    }

    static update(req,res){
        Item.update({
            _id: req.params.id
        }, req.body)
            .then(success=>{
                res.status(200).json({
                    message: success
                })
            })
            .catch(err=>{
                res.status(500).json({
                    message: err.message
                })
            })
    }

    static delete(req,res){
        Item.deleteOne({
            _id: req.params.id
        })
            .then(success=>{
                res.status(200).json({
                    message: success
                })
            })
            .catch(err=>{
                res.status(500).json({
                    err: err.message
                })
            })
    }

    static uploadImage(req,res){
      return new Promise((resolve,reject)=>{
          Image.create({
            url : req.file.cloudStoragePublicUrl
          })
            .then(image=>{
                resolve({
                    image: image,
                    message: 'upload image success'
                })
            })
            .catch(err=>{
                reject(err)
            })
      })  
    }

    static getImage(req, res) {
        Image.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = ItemController