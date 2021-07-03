/* ASYNCHRONOUS EXAMPLE */

/* console.log('Hello.');
setTimeout(function() {
    console.log("Goodbye!");
}, 2000);
console.log('Hello again!');
 */

/* PROMISE EXAMPLE */

// console.log("Before promise");

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("done");
//     }, 500);
// }).then(function (res) {
//     console.log("Then returned: " + res);
// });

// console.log("After promise");

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// });

// console.log(p);

// p.then((anyVariable) => {
//     console.log("This on line 34 " + anyVariable);
// }).catch((anyVariable) => {
//     console.log("This on line 36 " + anyVariable);
// });

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 5000);
//     });
// }

// async function asyncCall() {
//     console.log("calling...");
//     let result = await resolveAfter2Seconds(); // Awaiting the answer tto above
//     console.log(result); // Once tou know the answer, it returns. Thank to the async on line 49 and await'ing on line 51
// }

// asyncCall();

