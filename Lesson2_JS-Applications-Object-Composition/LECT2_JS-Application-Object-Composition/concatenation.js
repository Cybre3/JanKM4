const objs = [
    { name: "Peter", age: 35 },
    { age: 22 },
    { name: "Steven" },
    { height: 180 },
];
const concatenate = (a, o) => {
    console.log('this is', { ...a, ...o });
    return { ...a, ...o };
};
const c = objs.reduce(concatenate, {});
console.log(c); //{ name: 'Steven', age: 22, height: 180 }
