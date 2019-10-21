const EThread = require('../models/emergencyThread');

exports.findThreads = (req,res,next) => {
    let {coordinates} = req.body;
    EThread.find(
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