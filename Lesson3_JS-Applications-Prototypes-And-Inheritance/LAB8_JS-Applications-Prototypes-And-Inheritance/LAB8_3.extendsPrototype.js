class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

function main(ClassToExtend) {
    ClassToExtend.prototype.species = 'Human';
        (ClassToExtend.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this}`;
        });
}

main(Person);
let p = new Person("john doe", "doe@mail.com");
console.log(p.toSpeciesString());
