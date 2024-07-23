
// DEPENDENCIES
const express = require('express');
const cors = require("cors");

//CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLERS
const workoutsController = require("./controllers/workoutsController")
app.use("/workouts", workoutsController)

app.get("/", (req,res) =>{
    res.send("Welcome to the Pursuit To Fitness")
});

module.exports = app;