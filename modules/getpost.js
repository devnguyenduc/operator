var express = require('express');
var routes = express.Router();

import QuantumDB from '../connect/QuantumDB';
let DB = new QuantumDB();
DB.connect("post");

routes.get("/:file_name",(req,res)=>{
    let file_name = req.params.file_name;
    let result = DB.findVector(file_name);
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.end(JSON.stringify(result));
});

module.exports = routes;