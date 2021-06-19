// console.log("This is", this);

// let b = "b";
// var a = "a";
// console.log(this.b); // undefined
// console.log(this.a); // a

// function foo() {
//     console.log("Simple function call");
//     console.log(this === window); // true
// }

// foo();

// function solve() {
//     "use strict";
//     console.log(this);
// }

// solve(); // undefined

// function solve1() {
//     console.log(this);
// }

// solve1(); // Window

// let person = {
//     firstName: "Peter",
//     lastName: "Ivanov",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
//     whatIsThis: function () {
//         return this;
//     },
// };
// console.log(person.fullName()); // Peter Ivanov
// console.log(person.whatIsThis()); // person

// function foo() {
//     console.log('this inside of foo ', this);
//     console.log(this === global);
// }

// let user = {
//     count: 10,
//     foo: foo,
//     bar: function () {
//         console.log(this === global);
//     },
// };

// user.foo(); // false
// let func = user.bar;
// func(); // true
// user.bar(); // false

// let mainElement = document.getElementById("main");

// mainElement.addEventListener("click", function (e) {
//     console.log(this === e.currentTarget); // Always true
//     console.log("The event this happened on was ", this);
// });

// class Person {
//     constructor(fn, ln) {
//         this.first_name = fn;
//         this.last_name = ln;
//         this.displayName = function () {
//             console.log(`Name: ${this.first_name} ${this.last_name}`);
//         };
//     }
// }
// let person = new Person("John", "Doe");
// console.log('My new person object from tyhe Person object factory (class) is ', person);
// let newPerson = new Person('Data', 'Jones');
// person.displayName(); // John Doe
// newPerson.displayName();

/* THIS WITH INNER FUNCTIONS */
// function outer() {
//     console.log(this); // Object {name: "Peter"}
//     function inner() {
//         console.log(this); // Window
//     }
//     inner();
// }
// const obj = { name: 'Peter', func: outer }
// obj.func();

function outer() {
    const inner = () => console.log(this);
    inner();
}

function reg() {
    function notArrow() {
        console.log(this);
    }
    notArrow();
}

const obj = { name: "Peter", func: outer, notA: reg };
obj.func(); // Object {name: "Peter"}
obj.notA();
