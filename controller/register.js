const User = require('../models/user');
const bcrypt = require('bcryptjs')

exports.register = (req,res,next) => {
    let {email,password,phone,name,gender} = req.body

    User.findOne({email})
    .exec((err,db)=>{
        if(err)
            return res.json({err})
        if(!db){
            let user = new User({email,password,phone,name,gender})
            user.save((err,db)=>{
                if(err)
                    return res.json({msg:err.message})
                return res.json({msg:"User created successfully"})
            })     
        }
        else {
            return res.json({msg: 'User already exsists'})
        }
    })
}