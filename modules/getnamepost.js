let express = require("express");
let routes = express.Router();

import QuantumDB from '../connect/QuantumDB';

let DB = new QuantumDB();
DB.connect("post");
let list = [];
routes.get("/",(req,res)=>{
    list = DB.viewAll();
    let new_list = Object.assign(list);
    new_list.forEach(element => {
        delete element.data;
    });
    let str_list = JSON.stringify(new_list);
    res.end(str_list);
})

module.exports = routes;