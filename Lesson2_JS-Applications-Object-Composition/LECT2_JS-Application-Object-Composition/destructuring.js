/* DESTRUCTURING */

// const department = {
//     name: "Engineering",
//     data: {
//         director: { name: "John", position: "Engineering Director" },
//         employees: [],
//         company: "Quick Build",
//     },
// };

// const { data } = department; //now data references the data object directly
// console.log(data);

// const {
//     data: { director },
// } = department;
// console.log(director);
// director.name = "sarah"; // changed the directors name
// console.log(director);

// const objectList = [{ length: "1" }, { width: "2" }, { height: "3" }];
// const [length, width, height] = objectList; //now each object can be referenced directly
// console.log(length, width, height);

/*  DESTRUCTURING NESTED ARRAYS */

// const departments = [
//     ["Engineering", ["secretary", "director", "worker"]],
//     ["Accounting", ["director", "accountant"]],
// ];

// const [[name, positions], [otherName, otherPostion]] = departments; //name is 'Engineering' //positionsis['secretary','director','worker']

// console.log(name, positions);
// console.log(otherName, otherPostion);

/* DESTRUCTURING OBJECTS AND ARRAYS */

const employees = [
    { name: "John", position: "worker" },
    { name: "Jane", position: "secretary" },
];
const [{ name }] = employees; //nameis'John'
console.log(name);

const company = {
    employees: ["John", "Jane", "Sam", "Suzanne"],
    name: "Quick Build",
};
const { employees: [employee] } = company; //employeeis'John'
console.log(employee);
