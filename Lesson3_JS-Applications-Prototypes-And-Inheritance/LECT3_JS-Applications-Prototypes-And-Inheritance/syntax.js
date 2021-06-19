class Foo {
    constructor(who) {
        this.who = who;
    }

    identify() {
        return "I am " + this.who;
    }
}

class Bar extends Foo {
    constructor(who) {
        super(who);
    }

    speak() {
        return "Hello, " + this.identify() + ".";
    }
}

let amFoo = new Foo('Me');
console.log(amFoo);
console.log(amFoo.identify());

let amBar = new Bar('You');
console.log(amBar);
console.log(amBar.speak());