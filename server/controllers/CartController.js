const Cart = require('../models/Carts')
const jwtHelper = require('../helpers/jwtHelper')

class CartController {
    static create(req,res){
        const userData = jwtHelper.decode(req.headers.token)
        Cart.create({
            createdAt: new Date,
            total: req.body.total,
            items: req.body.items,
            user: userData._id
        })
            .then(cart=>{
                req.status(200).json({
                    cart: cart,
                    message: "success checkout cart"
                })
            })
            .catch(err=>{
                req.status(500).json({
                    err: err.message
                })
            })
    }

    
}

module.exports = CartController