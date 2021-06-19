function main() {
    let fibNum = [0, 1];
    function fibNoc() {
        fibNum.push(fibNum.pop());
        let num = fibNum.reduce((accum, el) => accum + el);
        fibNum.push(num);
        fibNum.shift();
        return fibNum[0];
    }

    return fibNoc;
}

let fib = main();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
