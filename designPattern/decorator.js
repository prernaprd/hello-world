//Attach additional responsibilities to an object dynamically.
// Decorators provide a flexible alternative to subclassing for extending functionality.
class Inventory {
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }

    toString() {
        return `${this.item} costs ${this.price}`;
    }
}

class GoldInventory {
    constructor(baseItem) {
        this.item = `Golden ${baseItem.item}`;
        this.price = 1000 + baseItem.price;
    }

    print() {
        console.log(`${this.item} costs ${this.price}`);
    }

}

const inventory = new Inventory('Spoon', 20.00);
const golden = new GoldInventory(inventory);

golden.print();