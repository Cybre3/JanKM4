class Figure {
    constructor(unit = "cm") {
        this.units = {
            m: 0.01,
            cm: 1,
            mm: 10,
        };
        this.unit = unit;
    }

    changeUnits(newUnit) {
        this.unit = newUnit;
    }
}

class Circle extends Figure {
    constructor(radius, unit, units) {
        super(unit, units);
        this.radius = radius;
    }

    get area() {
        return Math.PI * (this.radius * this.units[this.unit]) * (this.radius * this.units[this.unit]);
    }

    toString() {
        return `Figures units: ${this.unit} Area: ${this.area} - radius: ${this.radius * this.units[this.unit]}`;
    }
}

class Rectangle extends Figure {
    constructor(width, height, unit, units) {
        super(unit, units);
        this.width = width;
        this.height = height;
    }

    get area() {
        return (this.width  * this.units[this.unit]) * (this.height * this.units[this.unit]);
    }

    toString() {
        return `Figures units: ${this.unit} Area: ${this.area} - width: ${
            this.width  * this.units[this.unit]}, height: ${this.height  * this.units[this.unit]}`;
    }
}

function main() {
    return {
        Figure,
        Circle,
        Rectangle,
    };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); // Figuresunits: mm Area: 1200 - width: 30, height: 40
// // console.log(r)
r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); //Figuresunits: cm Area: 12 - width: 3, height: 4

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figuresunits: mm Area: 7853.981633974483 - radius: 50

c.changeUnits('m');
console.log(c.area)
console.log(c.toString())

// this.units = {
//     m: 0.01,
//     cm: 1,
//     mm: 10
// };

// let m = main();
// let r = new m.Rectangle(3, 4, "mm");
// console.log(r.area);
// console.log(r.toString());
