const mongoose = require("mongoose");

let emergencySchema = new mongoose.Schema({
    expiresIn: {
        type: Date,
        default: Date.now,
        index: {
            expires: '1m'
        }
    },
    createdBy: {
        type: mongoose.Schema.Types,
        ref: 'User'
    },
    threadName: {
        type: String
    },
    location: {
        type: {type: String},
        coordinates:[Number]
    }
})

emergencySchema.index({ location: "2dsphere" });
let EThread = new mongoose.model('EThread',emergencySchema);

module.exports = EThread;