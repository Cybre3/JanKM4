const x = 42;
const getX = function () {
    return this.x;
};
const module2 = { x, getX };
const unboundGetX = module2.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module2);
console.log(boundGetX()); // 42
