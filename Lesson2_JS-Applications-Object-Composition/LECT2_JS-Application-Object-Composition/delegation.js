const objs = [
    { name: "Peter", age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 },
];
const delegate = (a, b) => Object.assign(Object.create(a), b);
const d = objs.reduceRight(delegate, {});
console.log(d); //{ name: 'Peter', age: 35 }
console.log(d.height); //180
