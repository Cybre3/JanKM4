class Hex {
    constructor(number) {
        this.value = number;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let hexValue = this.value.toString(16);
        return `0x${hexValue.toUpperCase()}`;
    }

    plus(number) {
        let newHex = this.value + number.value;
        
        return newHex;            
    }

    minus(number) {}

    parse(string) {
        return string.toString(10);
    }
}

let FF = new Hex(255);
console.log(FF.toString()); // 0xFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); // 0xF
console.log(a.plus(b).toString() === "0xF"); // True


