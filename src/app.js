const express = require("express");
const path = require("path");
/* const methodOverride = require("method-override");
const session = require("express-session")
const validateLoggedInUserMW = require("./src/middlewares/validateLoggedInUserMW")
const rememberSessionMW = require("./src/middlewares/rememberSessionMW")
const cookies = require('cookie-parser');
const cors = require("cors"); */

const app = express()

app.get("/", (req,res) => {
    res.send("Momo tilteado")
})

app.listen("3000", () =>{
    console.log("Todo sobre ruedas")
})