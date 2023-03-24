const mongoose = require("mongoose");
const validator = require("validator");
const eventSchema = new mongoose.Schema({
    title : {
        type:String,
        require:true,
        maxlength:15
    },
    description : {
        type:String,
        require:true,
        maxlength:60
    },
    location : {
        type:String,
        require:true,
        maxlength:10
    },
    starTime :{
        type:String,
        require:true
    }
})
const Scheduler = new mongoose.model("Scheduler", eventSchema);
module.exports = Scheduler;