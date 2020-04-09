//Separate the construction of a complex object from its representation so that the same 
//construction process can create different representations.
class Person {
    constructor(builder) {
        this.first = builder.first;
        this.last = builder.last;
        this.email = builder.email;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class PersonBuilder {
    addFirst(value) {
        this.first = value;
        return this;
    }

    addLast(value) {
        this.last = value;
        return this;
    }

    addEmail(value) {
        this.email = value;
        return this;
    }

    build() {
        return new Person(this);
    }
}

let person = new PersonBuilder().addFirst('Alex').addLast('Matthew').addEmail('alex@gmail.com').build();
console.log(person.toString());