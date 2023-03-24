const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eventScheduler")
.then(()=>{
    console.log("connection is established")
}).catch((e)=>{
    console.log("No connection")
})