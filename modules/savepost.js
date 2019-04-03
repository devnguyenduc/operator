var express = require('express');
var routes = express.Router();
import QuantumDB from '../connect/QuantumDB';

let DB = new QuantumDB();
DB.connect("post");

let hello = "";
routes.post("/", (req, res) => {
    let obj_data = req.body;
    obj_data.id = obj_data.file_name;
    console.log(obj_data);
    var result = DB.create(obj_data);
    if (result == true) {
        hello = true;
    } else {
        result = DB.update(obj_data.id,obj_data)
        if(result == true){
            hello = true;
        }else{
            hello = false;
        }
    }
    res.send(hello);
});

// routes.get("/test/",(req,res)=>{
//     if(success == true){
//         let success_send = `<div class="alert alert-primary" role="alert">
//             <strong>Tạo thành công </strong> <a href="/homepage" class="alert-link">Bấm đường dẫn này để quay lại trang chủ</a>
//         </div>`
//         res.send(success_send);
//     }else if(success == false){
//         let fail_send = `<div class="alert alert-primary" role="alert">
//             <strong>Tạo bài viết thất bại</strong>
//         </div>`
//         res.send(fail_send);
//     }else{
//         res.send("404 ERROR!!!");
//     }
// })

module.exports = routes