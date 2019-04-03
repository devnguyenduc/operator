import Frame from './frame';
import QuantumDB from '../connect/QuantumDB';

var dbpost = new QuantumDB();
dbpost.connect("post");

export default class Post extends Frame{
    constructor(){

    }
    view(){
        
    }
}