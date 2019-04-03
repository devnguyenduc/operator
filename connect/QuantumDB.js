var fs = require('fs');

function readURL(url) {
    let strValue = ""
    if (fs.existsSync(url)) {
        strValue = fs.readFileSync(url, 'utf-8')
    } else {
        strValue = null
    }
    return strValue
}

export default class QuantumDB {
    constructor() {
        this.QuantumTech = ".json";
        this.QuantumUrl = "Quantum/";
        this.Db = "";
        this.errorDB = "";
        this.url = ""
    }

    showError(e) {
        console.log("=======================================================");
        console.log(e);
        console.log("=======================================================");
    }

    connect(DB) {
        if (DB != "" && typeof (DB) == "string") {
            this.Db = DB;
            this.url = this.QuantumUrl + DB;
            console.log(this.url);
            return true
        } else {
            this.errorDb = "Data connect fail";
            return false;
        }
    }

    setTech(tech){
        this.QuantumTech = tech;
    }

    getDB() {
        return this.url;
    }

    readStringValue() {
        let result = [];
        if (fs.existsSync(this.url)) {
            let allFile = fs.readdirSync(this.url, 'utf8');
            allFile.forEach(value => {
                var strValue = fs.readFileSync(this.url + "//" + value, "utf-8");
                result.push(strValue);
            })
            return result;
        } else {
            return "Không tìm thấy đường kết nối tới " + this.Db;
        }
    }
    //
    viewAll() {
        let result = [];
        let arrayStrValue = this.readStringValue();
        if (Array.isArray(arrayStrValue)) {
            
            arrayStrValue.forEach(value => {
                let objValue = JSON.parse(value);
                result.push(objValue);
            })
            return result;
        } else {
            return false;
        }
    }

    findVector(state) {
        if (typeof (state) != "string") {
            return "Kiểu dữ liệu nhập vào là không đúng, mời nhập vào kiểu dữ liệu string";
        } else {
            let url = this.url + "//" + state + this.QuantumTech;
            if (fs.existsSync(url)) {
                let result = fs.readFileSync(url, 'utf-8');
                // Giá trị trả về khi tìm kiếm thành công file là Đối tượng danh sách JSON đó
                return JSON.parse(result);
            } else {
                return false;
            }
        }
    }

    find(state) {
        let findState = "";
        if (typeof (state) == "string") {
            findState = state.replace("{", "").replace("}", "");
        }
        if (typeof (state) == "object") {
            findState = JSON.stringify(state).replace("{", "").replace("}", "");
        }
        var arrayStrValue = this.readStringValue();
        if (Array.isArray(arrayStrValue)) {

            var result = arrayStrValue.find((value) => {
                value.toLowerCase() == findState.toLowerCase();
                console.log(value);
                return value;
            });
            return result;
        } else {
            return arrayStrValue;
        }
    }

    create(objWrite) {
        try {
            // Kiểm tra Database
            var result = "";
            if (fs.existsSync(this.url)) {
                let fileName = objWrite.id;
                let url = ""
                // Kiểm tra xem file nhập vào có bị thiếu email hay không
                if (fileName != undefined) {
                    url = this.url + "//" + fileName + this.QuantumTech;
                } else {
                    url = "False"
                }
                let string = JSON.stringify(objWrite, null, "\t");

                // Kiểm tra đường dẫn xem có tồn tại hay không
                if (fs.existsSync(url)) {
                    result = "Path Have Exist!";
                } else {
                    fs.writeFileSync(url, string, 'utf-8');
                    result = true;
                }
            } else {
                result = false;
            }
            return result;
        } catch (e) {
            this.showError();
            return false;
        }
    }

    update(find, obj) {
        try {
            // Kiểm tra Database có tồn tại hay không
            if (fs.existsSync(this.url)) {
                // Mở thử mục tìm tới file cần tìm
                let strValue = readURL(this.url + "//" + find + ".json");
                // Chuyển dữ liệu dạng str sang JSON:
                let objValue = JSON.parse(strValue);
                //Gán giá trị FileName = objValue.id để cho khi ta thay đổi tất cả các giá trị thì vẫn
                //không thay đổi đường dẫn
                let fileName = objValue.id;
                let newObj = Object.assign(objValue, obj);
                let string = JSON.stringify(newObj, null, "\t");
                let url = this.url + "//" + fileName + this.QuantumTech;
                fs.writeFileSync(url, string, 'utf-8');
                return true;
            } else {
                return false;
            }
        } catch (e) {
            this.showError();
            return false;
        }
    }
}
