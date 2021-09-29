let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1,2,3,4,5];

let arr: any[] = [1, true, 'string'];


//Tuple
let person: [number, string, boolean] = [1,'String',true];
//Tuple array
let employee: [number, string][]
employee = [
    [1,'String1'],
    [2,'String2'],
    [3,'String3']
]

//UNION
let pid: string | number
pid = '22';
pid = 22;

//ENUM
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction1.Left);
console.log(Direction2.Left);

//OBJECTS
type User = {
    id:number,
    name:string
}
const user: User = {
    id:1,
    name:'John'
}


//TYPE ASSERTION
let cid: any = 1;
let customerId = <number>cid;
let customerid2 = cid as number;

//FUNCTIONS
function addNumber(x: number,y:number): number{
    return x + y;
}

console.log(addNumber(1,2));

//no return 
function log(message: string | number): void{
    console.log(message);
}
log(1);
log('1');


//INTERFACE -- CAN'T USE WITH PRIMITIVES AND UNIONS
interface User1 {
    id: number,
    name: string,
    age?: number//optional property
}
const user1: User1 = {
    id:1,
    name:'John'
}

interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y;
console.log(add(20,30));
const sub: MathFunc = (x: number, y: number): number => x - y;
console.log(sub(15,10));

interface UserInterface {
    id: number
    name: string
    register2(): string
}

//CLASSES
class Users implements UserInterface{
    id: number
    name: string

    constructor(id:number, name:string){
        this.id = id;
        this.name=name;
    }
    register2(){
        return `${this.name} is now registered.`
    }
}

class Person {
    //private protected or default=public
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    register(){
        return `${this.name} is now registered.`
    }
}

const niko = new Person(1,'Nikolina Zilic');
console.log(niko.register());

const alex = new Users(2,'Alexandre Meziadi');
console.log(alex.register2());

//SUBCLASSES
class Employee extends Users{
    position: string;
    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}
const emp = new Employee(3,'Shawn', 'Developer');
console.log(emp.register2());


//GENERICS
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray =  getArray<number>([1,2,3,4,5]);
numArray.push(6);
let strArray = getArray<string>(['a','b','c','d','e']);
strArray.push('f');
