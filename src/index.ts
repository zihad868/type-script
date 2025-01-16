
let id: number = 10;
let cname: string = 'xyz';
let lst: any = ['a', 1, '7', {}];

// console.log(id)
// console.log(cname)
// console.log(lst)

enum direction {
    left,
    right,
    up,
    down
}


enum direction2 {
    left = 'left',
    right = 'right',
    up = 'up'
}

// console.log(direction2)


// Interface 

const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'xyz'
}

// console.log(user);

type User2 = {
    id: number,
    name: string
}

const user2: User2 = {
    id: 1,
    name: 'xyz'
}

// console.log(user2)

// type assertion
let cid: any = '8';
let customerId = <number> cid;
// customerId = '50';
customerId = 40;
// console.log(customerId, cid)

let customer2Id = cid as number;
// console.log(customer2Id)


function addNumber(x: number, y: number): number{
    return x + y;
}

// console.log(addNumber(4, 5))


function log(message : string | number){
    console.log(message)
}

// log('this')

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user3: UserInterface = {
    id: 5,
    name: 'xyz',
    age: 25
}

// user3.id = 10;

// console.log(user3)



// interface function

interface mathFunction {
    (x: number, y: number): number
}

const add: mathFunction = (x: number, y: number) => x + y;
const sub: mathFunction = (x: number, y: number) => x - y;
const sum = add(5, 2);
const substraction = sub(7, 5);
// console.log(sum, substraction)


// Normal type
function getArray2(items: any[]): any[] {
    return new Array().concat(items)
}

const numArray2 = getArray2([1, 2, 3, 4]);
const stringArray2 = getArray2(['one', 'two', 'three']);

numArray2.push(20)

// console.log(numArray)
// console.log(stringArray)

// Generic type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

const numArray = getArray<number>([1, 5, 4, 10, 12])
numArray.push(5)
// numArray.push('xyz')
// console.log(numArray)

const stringArray = getArray<string>(['one', 'two', 'three']);
stringArray.push('abc')
// stringArray.push(5)
// console.log(stringArray);

