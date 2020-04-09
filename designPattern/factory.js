//Define an interface for creating an object, but let subclasses decide which class to instantiate.

class Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Shopper extends Person {
    constructor(name, money = 0) {
        super(name);
        this.money = money;
    }

    toString() {
        let value = JSON.stringify(this);
        return value;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
    }
    
}

const user = (type, name, money)=> {
    let userObj;
    if(type === 'Employee') {
        userObj = new Employee(name);
    }
    else {
        userObj = new Shopper(name, money);
    }
    return userObj
}

let alex = user('Shopper', 'Alex', 300);
let bob = user('Employee', 'Bob');

console.log(alex.toString());
console.log(bob.toString());

