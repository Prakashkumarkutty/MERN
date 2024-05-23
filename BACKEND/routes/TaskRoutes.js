const express = require("express");
const router = express.Router(); // Corrected the instantiation of the router

const { createTask,getTask ,getSingleTask, updateTask, deleteTask} = require("../controller/taskController");

// Define your routes using the router
router.post("/", createTask);
router.get("/",getTask)
router.get("/:id",getSingleTask)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)

module.exports = router;
