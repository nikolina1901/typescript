"use strict";
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'string'];
//Tuple
let person = [1, 'String', true];
//Tuple array
let employee;
employee = [
    [1, 'String1'],
    [2, 'String2'],
    [3, 'String3']
];
//UNION
let pid;
pid = '22';
pid = 22;
//ENUM
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
//TYPE ASSERTION
let cid = 1;
let customerId = cid;
let customerid2 = cid;
//FUNCTIONS
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 2));
//no return 
function log(message) {
    console.log(message);
}
log(1);
log('1');
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
console.log(add(20, 30));
const sub = (x, y) => x - y;
console.log(sub(15, 10));
//CLASSES
class Users {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register2() {
        return `${this.name} is now registered.`;
    }
}
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const niko = new Person(1, 'Nikolina Zilic');
console.log(niko.register());
const alex = new Users(2, 'Alexandre Meziadi');
console.log(alex.register2());
//SUBCLASSES
class Employee extends Users {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register2());
//GENERICS
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
numArray.push(6);
let strArray = getArray(['a', 'b', 'c', 'd', 'e']);
strArray.push('f');
