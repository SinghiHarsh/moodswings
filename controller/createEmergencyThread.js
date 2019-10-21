const EThread = require('../models/emergencyThread');
const User = require('../models/user');

exports.emergenyThread = (req,res,next) => {
    let = {
        expiresIn,  
        createdBy,
        threadName,
        coordinates
        } = req.body;
    User.findOne({_id:createdBy})
    .exec((err,db)=>{
        if(err)
            return res.json({msg:err.message})
        if(db){       
            console.log(db);
            let emergenyThread = new EThread({
                expiresIn,
                createdBy: db._id,
                threadName,
                location: {
                    type: "Point",
                    coordinates
                }
            }).save((err,db1)=>{
                if(err)
                    return res.json({msg:err.message})
                return res.json(db1)
            })
        }
    })
}