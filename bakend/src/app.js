const express = require("express");
require("./db/conn");
const Scheduler = require("./models/event")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/events", async(req,res)=>{
    try{
        const user = new Scheduler(req.body);
        console.log(req.body);
        const insertEvent = await user.save();
        res.status(201).send(insertEvent);
        
    }catch(e){
        res.status(400).send(e)
    }
    // console.log(req.body);
    // const user = new Scheduler(req.body);
    // user.save().then(()=>{
    //     res.status(201).send(user);
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
});

app.get("/events", async(req,res)=>{
    try{
        const getEvent = await Scheduler.find({}).sort({"ranking":1});
        res.status(201).send(getEvent); 
    }catch(e){
        res.status(400).send(e)
    }
    
});
app.get("/events/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getEvents = await Scheduler.findById(_id)
        res.status(201).send(getEvents); 
    }catch(e){
        res.status(400).send(e)
    }
    
});

app.patch("/events/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getEvents = await Scheduler.findByIdAndUpdate(_id,req.body, {
            new:true
        })
        res.send(getEvents); 
    }catch(e){
        res.status(500).send(e)
    }
    
});
app.delete("/events/:id", async(req,res)=>{
    try{
        const getEvents = await Scheduler.findByIdAndDelete(req.params.id)
        res.send(getEvents); 
    }catch(e){
        res.status(500).send(e)
    }
    
});
app.listen(port,()=>{
    console.log(`connection is establish at ${port}`)
})