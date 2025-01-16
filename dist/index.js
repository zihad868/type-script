"use strict";
let id = 10;
let cname = 'xyz';
let lst = ['a', 1, '7', {}];
// console.log(id)
// console.log(cname)
// console.log(lst)
var direction;
(function (direction) {
    direction[direction["left"] = 0] = "left";
    direction[direction["right"] = 1] = "right";
    direction[direction["up"] = 2] = "up";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
var direction2;
(function (direction2) {
    direction2["left"] = "left";
    direction2["right"] = "right";
    direction2["up"] = "up";
})(direction2 || (direction2 = {}));
// console.log(direction2)
// Interface 
const user = {
    id: 1,
    name: 'xyz'
};
const user2 = {
    id: 1,
    name: 'xyz'
};
// console.log(user2)
// type assertion
let cid = '8';
let customerId = cid;
// customerId = '50';
customerId = 40;
// console.log(customerId, cid)
let customer2Id = cid;
// console.log(customer2Id)
function addNumber(x, y) {
    return x + y;
}
// console.log(addNumber(4, 5))
function log(message) {
    console.log(message);
}
const user3 = {
    id: 5,
    name: 'xyz',
    age: 25
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const sum = add(5, 2);
const substraction = sub(7, 5);
// console.log(sum, substraction)
// Normal type
function getArray2(items) {
    return new Array().concat(items);
}
const numArray2 = getArray2([1, 2, 3, 4]);
const stringArray2 = getArray2(['one', 'two', 'three']);
numArray2.push(20);
// console.log(numArray)
// console.log(stringArray)
// Generic type
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 5, 4, 10, 12]);
numArray.push(5);
// numArray.push('xyz')
// console.log(numArray)
const stringArray = getArray(['one', 'two', 'three']);
stringArray.push('abc');
// stringArray.push(5)
// console.log(stringArray);
