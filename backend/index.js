const express = require('express');
const { createTodo,updateTodo } = require('./types');
const { todo } = require("./db")
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors({
    //Origin: Specify if need to give access to particular domain only
}))

app.post("/todo",async function(req,res){
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Send correct inputs",
        })
        return;
    }
    //Put in MongoDB
    await todo.create({
        title: createpayload.title,
        description: createpayload.description, 
        completed: false //As Its Need to be Done!
    })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find();

    res.json({
        todos
    })
})

app.put("/complete",async function(req,res){
    const updatepayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatepayload);
    if(!updatepayload.success){
        res.status(411).json({
            msg: "Wrong inputs send!",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);