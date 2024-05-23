const taskModel = require("../models/TaskModel")
const mongoose = require("mongoose")
//To create a task -post

const createTask = async (req,res)=>{
    
    const {title,description}=req.body


    try{
        const task = await taskModel.create({title,description})
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}
//To get all tasks - GET
const getTask = async (req,res) =>{
    try{
        const tasks=await taskModel.find({})
        res.status(200).json(tasks)
    }catch(e){
       res.status(400).json ({error:e.message})
    }
}

//To get single task - GET

const getSingleTask = async (req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const singleTask =await taskModel.findById(id)
        res.status(200).json(singleTask)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//To update a task - PATCH

const updateTask =async (req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const task = await taskModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:"task not found"})
    }
}


//TO delete a task - DELETE

const deleteTask = async (req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const task = await taskModel.findByIdAndDelete(id)
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:"task not found"})
    }
}




module.exports = {createTask,getTask,getSingleTask,updateTask,deleteTask}