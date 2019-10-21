var User = require('../models/user')

exports.login = (req,res,next) => {
    var {email, password} = req.body
    User.findOne({email})
    .exec(function(err,db){
        if(err)
            return res.json({msg:err.message})
        if(db){
            if(db.password === password){
                return res.json({msg:"User logged in",db})
            }
            else{
                return res.json({msg:"Invalid password"})
            }
        }
        else {
            return res.json({msg:'Email id does not exsists'})
        }
    })
}