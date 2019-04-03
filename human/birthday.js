export default class Birthday {
    constructor(day = 1, month = 1, year = 1) {
        this.birthday = new Date(day, month, year);
    }
    set(day = 1, month = 1, year = 1) {
        this.birthday = new Date(day, month, year);
    }
    get() {
        return this.birthday;
    }
}