'use strict'
class Singleton{
    getObject(){
        if(!Singleton.instance) {
            instance = new Singleton();
        }
        else {
            return Singleton.instance;
        }
    }
}

const singleton = new Singleton();
const s1 = singleton.getObject();