// The Prototype Pattern creates new objects, but rather than creating non-initialized objects it 
// returns objects that are initialized with values it copied from a prototype - or sample - object.
// The Prototype pattern is also referred to as the Properties pattern.

class Customer {
    
    constructor(first, last, status = 'Pending') {
        this.first = first;
        this.last = last;
        this.status = status;
        this.hobbyList = [];
    }

    getDetails() {
        return `${this.first} ${this.last} with ${this.status}`;
    }

    addHobbies(hobby) {
        this.hobbyList.push(hobby);
    }
}

class CustomerPrototype {
    constructor(proto) {
        this.proto = proto;
    }

    clone() {
        let customer = new Customer(this.proto.first, this.proto.last, this.proto.status);
        customer.addHobbies('Camping');
        return customer;
    }
}

let bob = new CustomerPrototype({first: 'Bob', last: 'Davis', status: 'Active'}).clone();
bob.addHobbies('Sking');

let sam = new CustomerPrototype({first: 'Sam', last: 'Matthew'}).clone();

console.log(`${bob.getDetails()} status and likes doing ${bob.hobbyList}` );
console.log(`${sam.getDetails()} status and likes doing ${sam.hobbyList}` );

