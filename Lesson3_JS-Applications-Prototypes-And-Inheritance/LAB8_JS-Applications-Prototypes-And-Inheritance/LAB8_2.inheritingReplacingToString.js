class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
}

function main() {
    return {
        Person,
        Teacher,
        Student,
    };
}

let pt = main();
let person = new pt.Person("john doe", "doe@mail.com");
let teacher = new pt.Teacher("john doe", "doe@mail.com", "math");
let student = new pt.Student("john doe", "doe@mail.com", "engineer");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());

// toString() {
//     if (this instanceof Student) {
//         return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
//     } else if (this instanceof Teacher) {
//         return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
//     } else {
//         return `Person (name: ${this.name}, email: ${this.email})`;
//     }
// }
