const Thread = require("../models/thread");

exports.createThread = (req,res,next) =>{
    const {
        createdAt,
        threadName,
        coordinates,
        costTocost,
        extraPayment,
        socialService
    } = req.body;
    let thread = new Thread({
        threadName,
        location: {
            type: "Point",
            coordinates
        },
        costTocost,
        extraPayment,
        socialService
    })
    thread.save((err,db)=>{
        if(err)
            return res.json({msg:err.message})
        return res.json(db)
    })
}