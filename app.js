const express = require('express');
const chalk = require("chalk");
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;
app.use('combine')
app.get("/",(req,res)=>{
    req.send("Hello borntoDev");
})
app.listen(port,()=>{
    debug.log("Listening on port %d"+chalk.green(port))
})