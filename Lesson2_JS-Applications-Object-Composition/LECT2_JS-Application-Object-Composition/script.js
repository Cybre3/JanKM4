// let student = {
//     firstName: "Maria",
//     lastName: "Green",
//     age: 22,
//     locations: {
//         home: { lat: 42.698, lng: 23.322 },
//         work: { lat: 142.698, lng: -123.322 },
//         space: {spaceLat: [1, {SpaceLong: 42}, 3]}
//     }
// };

// // console.log(student);
// console.log(student.locations.space.spaceLat[1].SpaceLong);

/* COMPOSING OBJECTS */

// let name = "Sofia";
// let population = 1325744;
// let country = "Bulgaria";
// let town = { name, population, country };
// console.log(town); // Object { name:"Sofia", population: 1325744, country: "Bulgaria" }

// town.location = { lat: 42.698, lng: 23.322 };
// console.log(town); //Object{...,location:Object}

/* COMBINING DATA WITH FUNCTIONS */

// let rect = {
//     width: 10,
//     height: 4,
//     grow: function (w, h) {
//         this.width += w;
//         this.height += h;
//     },
//     print: function () {
//         console.log(`[${this.width} x ${this.height}]`);
//     },
// };

// rect.grow(2, 3);
// rect.print(); // [12 x 7]

/* PRINTING OBJECTS */

// let rect = {
//     width: 10,
//     height: 4,
//     toString: function () {
//         return `rect [${this.width} x ${this.height}]`;
//     },
// };
// console.log(rect); // Object { width: 10, height: 4 }
// console.log(rect.toString());
// // This will invoke to String() to convert the object to String console.log('' + rect); // rect [12 x 7]


