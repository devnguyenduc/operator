
export default class Sex {
    constructor(value) {
        if (value == true) {
            this.male = true;
            this.female = false;
            this.sex = "Male";
        } else if (value == false) {
            this.female = true;
            this.male = false;
            this.sex = "Female";
        } else {
            this.male = null;
            this.female = null;
            this.sex = "";
        }
    }
    set(value) {
        if (value == true) {
            this.male = true;
            this.female = false;
        } else if (value == false) {
            this.female = true;
            this.male = false;
        } else {
            this.male = null;
            this.female = null;
        }
    }
    get(){
        return this.sex;
    }
    get_male(){
        return this.male;
    }
    get_female(){
        return this.female;
    }
}