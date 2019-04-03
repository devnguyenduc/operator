import Name from './name';
import Id from './id';
import Nickname from './nickname';
import Sex from './sex';
import Birthday from './birthday';
import Address from './address';
import Introduce from './introduce';

export default class Human {
    constructor(
        name = new Name(),
        id = new Id(),
        nickname = new Nickname(),
        sex = new Sex(),
        birthday = new Birthday(),
        address = new Address(),
        introduce = new Introduce(),
    ) {
        this.__name = name;
        this.__id = id;
        this.__nickname = nickname;
        this.__sex = sex;
        this.__birthday = birthday;
        this.__address = address;
        this.__introduce = introduce;
    }
    set(
        name = new Name(),
        id = new Id(),
        nickname = new Nickname(),
        sex = new Sex(),
        birthday = new Birthday(),
        address = new Address(),
        introduce = new Introduce(),
    ) {
        this.__name = name;
        this.__id = id;
        this.__nickname = nickname;
        this.__sex = sex;
        this.__birthday = birthday;
        this.__address = address;
        this.__introduce = introduce;
    }
    // Get các đối tượng trong class khởi tạo
    name() {
        return this.__name;
    }
    id() {
        return this.__id;
    }
    nickname() {
        return this.__nickname;
    }
    sex(){
        return this.__sex;
    }
    birthday(){
        return this.__birthday;
    }
    address(){
        return this.__address;
    }
    introduce(){
        return this.__introduce;
    }
}
