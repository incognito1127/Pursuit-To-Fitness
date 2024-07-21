app.js
// DEPENDENCIES
const express = require('express');
const cors = require("cors");
const app = express();

// MIDDLEWARE

app.use(cors());
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Welcome to the Pursuit To Fitness")
});

module.export = app;