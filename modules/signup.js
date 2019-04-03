var express = require('express');
var routes = express.Router();

import QuantumDB from '../connect/QuantumDB';
var dbConnect = new QuantumDB();

// Kiểm tra xem địa chi tài khoản có tồn tài hay không
function validSignUp(check) {
    try {
        //check nhận vào email của đối tượng đó.
        var db = dbConnect;
        var result = db.findVector(check);
        if (typeof (result) == "object") {
            console.log("Hàm validSignUp():" +result);
            return true;
        } else {
            console.log(result);
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}

async function createNewUser(user) {
    try {
        if (validSignUp(user.email) == false) {
            var result = await dbConnect.create(user);
            return result;
        } else {
            return "email hoặc id đã có người sử dụng";
        }
    } catch (e) {
        console.log(e)
    }

}

function convertPhone(phone) {
    if (phone.charAt(0) == "0") {
        return "+84" + phone.slice(1);
    } else {
        return "+84" + phone;
    }
}

routes.post("/", (req, res) => {
    var check = {};
    if (req.body.sign_up_password != req.body.sign_up_repassword) {
        res.send("Mật khẩu nhập lại không khớp với mật khẩu");
    } else {
        var user = {
            "id": req.body.sign_up_email,
            "email": req.body.sign_up_email,
            "phone": convertPhone(req.body.sign_up_nbphone),
            "family_name": req.body.sign_up_family_name,
            "name": req.body.sign_up_name,
            "password": req.body.sign_up_password
        }

        createNewUser(JSON.parse(JSON.stringify(user))).then(value => {
            res.send(value);
        }).catch(err => {
            res.send(err);
        })
    }
})

module.exports = routes;