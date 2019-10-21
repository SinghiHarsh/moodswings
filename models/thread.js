const mongoose = require("mongoose");

let threadSchema = new mongoose.Schema({
    expiresIn: {
        type: Date,
        default: Date.now,
        index: {
            expires: '1m'
        }
    },
    threadName:{
        type: String
    },
    location: {
        type: {type: String},
        coordinates:[Number]
    },
    costTocost:{
        type:Boolean,
        default:false
    },
    extraPayment: {
        type: Boolean,
        default: false
    },
    socialService:{
        type: Boolean,
        default: false
    }
})

threadSchema.index({ location: "2dsphere" });

let Thread = new mongoose.model('Thread',threadSchema);

module.exports = Thread;