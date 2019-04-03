var express = require('express');
var routes = express.Router();
import QuantumDB from "../connect/QuantumDB.js";
var dbConnect = new QuantumDB();
dbConnect.connect("userchecked");
async function validPassword(accountLogin){
    try{
        let db = await dbConnect;
        let value = db.findVector(accountLogin.email);
        if(value == false){
            return "Mật khẩu hoặc địa chỉ đăng nhập không đúng!";
        }else{
            if(value.password == accountLogin.password){
                delete value.password
                return true;
            }else{
                return "Mật khẩu hoặc địa chỉ đăng nhập không chính xác!";
            }
        }
        
    }catch(e){
        console.log(e);
        return false;
    }
}

routes.post("/",(req,res)=>{
    var user = {};
    user.email = req.body.sign_in_id;
    user.password = req.body.sign_in_pw;
    var result = validPassword(user);
    result.then(value=>{
        if(value == true){
            res.send("Đăng nhập thành công");
        }else{
            res.send(value);
        }
    })
});

module.exports = routes;