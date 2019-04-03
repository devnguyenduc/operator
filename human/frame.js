export default class Frame{
    constructor(value = ""){
        this.value = value;
    }
    set(value = ""){
        this.value = value;
    }
    get(){
        return this.value;
    }
}