// Primitive and non-primitive datatypes

// let a = 10;
// let b = a;

// a = 20;
// console.log(a, b);



// a = 20;

// let obj = {
//   name: "Raj",
//   age: 20,
// };

// let obj2 = obj;

// obj.name = "sam"
// console.log(obj2.name);


// Data Types
// 1. Primitive
//* number
let integerValue = 100;
let float = 3.14;
let notANumber = NaN; // 10/0
let infinity = Infinity;

// console.log(integerValue);
// console.log(float);
// console.log(notANumber);
// console.log(infinity);

// console.log(typeof infinity);

//* String
let fname = "Sam";
let template = `User: ${fname}`;
// console.log(template);

// * undefined
//weather app
let user;
// console.log(user); //undefined

// * null
let data = null;
// console.log(data); // null

//* BinInt
let bigNumber = 3895893659369n;
// console.log(typeof bigInt);
let anotherNumber = BigInt(3895893659369);
// console.log(anotherNumber);

// *Symbol
const id1 = Symbol('id');
const id2 = Symbol('id');
// console.log(id1 == id2);

// 2. Non-primitive
// Object
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Array
let array = [10, 20, 30];
// console.log(array);

// function
function hello(){
    console.log("hello world");
}
hello();

console.log(typeof hello);
console.log(typeof array);