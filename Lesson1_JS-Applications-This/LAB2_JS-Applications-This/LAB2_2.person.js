class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(name){
        let [first, last] = name.split(' ');
        if(first && last) {
            this.firstName = first;
            this.lastName = last;
        } else {
            return;
        }
    }
}

// let person = new Person("Albert", "Simpson");
// console.log(person.fullName);
// person.firstName = "Simon";
// console.log(person.fullName);
// person.fullName = "Peter";
// console.log(person.firstName);
// console.log(person.lastName);

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName);
