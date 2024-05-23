const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const taskRoutes = require("./routes/TaskRoutes")
const app=express()
const cors = require("cors")
//Middleware

app.use((req,res,next)=>{
    console.log("path"+req.path+"method"+req.method)
    next()
})

app.use(express.json());
app.use(cors())
// app.get('/',(req,res)=>{
//     res.send("Hello World!")
// })
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.port,()=>
    console.log("DB Connection succesfully and "+process.env.port+" la Connect aagitu "))   
    })
    .catch((error)=>console.log(error))

    app.use("/api/tasks",taskRoutes)