const jwt = require('jsonwebtoken')

class jwtHelper{
    static encode(dataObj){
        return jwt.sign(dataObj,process.env.JWT_SECRET)
    }

    static decode(token){
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}

// console.log(jwtHelper.encode({name:"abduh"}))
// console.log(jwtHelper.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'))s

module.exports = jwtHelper