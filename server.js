const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const Router = require('./routes/index')

let app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.send("Express app")
})

// Mongoose Connection
mongoose.connect("mongodb://admin:admin1234@ds137368.mlab.com:37368/help",
    {useNewUrlParser: true},
    (err,db)=>{
        if(err)
            return console.log(err.message)
        console.log("Connected to the DB") 
    }
)



//
app.use('/',Router);

app.listen("3000",(err)=>{
    if(err)
        return console.log(err.message);
    console.log("Server on PORT 3000");
})
