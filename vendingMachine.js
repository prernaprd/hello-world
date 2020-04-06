'use strict'
const products = {'1A' : 'Coke', '2B': 'Lays'};
const inventory = [{pid: 1, name: 'Coke', option: '1A', price: '240', quantity: 3}, {pid: 1, name: 'Lays', option: '2B', price: '140', quantity: 5}]

/**
 * To buy product from vending machine.
 * @param {string} option - the product options.
 * @param {Object} amount - the amount provided by user.
 * @returns {Object}
 */
const buyProduct = (option, amount) => {
    if(option != null && amount != null) {

        let productKeys = Object.keys(products);
        //Product and amount input validation
        if(productKeys.indexOf(option) !== -1 && Object.keys(amount).length > 0) {
            let price = 0;
            inventory.forEach(item => {
                if(item.option === option && item.quantity > 0) {
                    price = item.price;
                }
                else {
                    return errorHandler(3, 'product', 'Insuffiecient qunatity');
                }
            });

            let totalAmount = calculateTotalAmount(amount);
            if(totalAmount >= price) {
                return {remainingAmount: totalAmount-price};
            }
            else {
                return errorHandler(3, 'amount', 'Insuffiecient balance');
            }
        }
        else {
            return errorHandler(2, 'product', 'Invalid product');
        }
    }
    else {
        return errorHandler(1, 'product | amount', 'Missing Mandatory');
    }
    
}

/**
 * Create error response
 * @param {Number} errorCode - the error code.
 * @param {String} attribute - the attribute causing error.
 * @param {String} desc - the description of error message.
 * @returns {Object}
 */
const errorHandler = (errorCode, attribute, desc) => {
    return {errorCode: errorCode, attribute: attribute, desc: desc};
}

/**
 * Calculate total amount given by user.
 * @param {Object} amount - the user provided amount.
 * @returns {Number} totalAmount - the calculated amount 
 */
const calculateTotalAmount = (amount) => {
    let moneyKeys = Object.keys(amount);
    let totalAmount = 0;
    for(let i = 0; i < moneyKeys.length; i++) {
        let type = moneyKeys[i];
        switch(type) {
            case '10c':
            case '25c':
            case '50c':
                totalAmount = totalAmount + parseInt(type.substring(0,2))* amount[type];
                break;
            case '1$':
            case '5$':
            case '10$':
                totalAmount = totalAmount + parseInt(type.substring(0,2)) * amount[type] * 100;
                break;

        }
    }

    return totalAmount;
}

console.log('Valid Request');
console.log(buyProduct('1A', {'1$': 2, '10c': 5}));
console.log('Insufficient balance')
console.log(buyProduct('1A', {'1$': 1, '10c': 4}));
console.log('Invalid product')
console.log(buyProduct('1D', {'1$': 2, '10c': 4}));
console.log('Missing mandatory field')
console.log(buyProduct(null, {'1$': 2, '10c': 4}));

