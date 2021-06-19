class Hex {
    constructor(number) {
        this.value = number;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        console.log(this);
        return this;
    }

    plus(number) {
        // let newHex = this.value + number.value;
        
        // return newHex;
            let sum = this.value + number.value;
            let hex = sum.toString(16).toUpperCase();
            return `0x${hex}`;
    }

    minus(number) {}

    parse(string) {
        return string.toString(10);
    }
}

// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0xF
// console.log(a.plus(b).toString() === "0xF"); // True
