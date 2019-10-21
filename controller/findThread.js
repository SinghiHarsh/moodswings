const Thread = require('../models/thread');

exports.findThreads = (req,res,next) => {
    let {coordinates} = req.body;
    console.log(coordinates);
    Thread.find(
        {
            location:
            {   $near:
                {
                    $geometry: {type:"Point",coordinates},
                    $maxDistance:2000
                }
            }
        }
    ).exec((err,db)=>{
        if(err)
            return res.json({msg:err.message})
        return res.json(db)
    })
}