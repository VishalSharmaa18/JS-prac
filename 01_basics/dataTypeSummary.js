// Primitive

// 7 Types : String,boolean,null,Number,undefined,Symbol,BigInt

let score = 100;
let score2 = 100.04;

console.log(typeof score2);

let isLoggedIn = true;

let cityName ;

const id = Symbol('123');

const bigNumber = 784738798n; //by putting n in the end it is considered as a bigint..

//////****************//////

//Refrence type/Non-Primitive

// Arrays, Objects, Functions


const heros = ['sachin tendulkar','ms dhoni','rohit sharma','yuvraj singh'];

const myObject = {
    name: 'vishal',
    age: 24,
    isLoggedIn: true,
}

console.log(typeof myObject)

const myFunctioin = function(){
    console.log("hello World")
}

console.log(typeof myFunctioin);

