const sharePersonalInfo = function (...activities) {
    let info =
        `Hello, my name is ${this.name} and ` + `I'm a ${this.profession}.\n`;
    info += activities
        .reduce((acc, curr) => {
            let el = `--- ${curr}\n`;
            return acc + el;
        }, "My hobbies are:\n")
        .trim();
    return info;
};

const firstPerson = { name: "Peter", profession: "Fisherman" };
const secondPerson = { name: "Data the Android", profession: "Star Traveler" };
console.log(
    sharePersonalInfo.call(firstPerson, "biking", "swimming", "football")
);
console.log(sharePersonalInfo(secondPerson, "biking", "swimming", "football"));
// Hello, my name is Peter.
// I'm a Fisherman.
// My hobbies are:
// --- biking
// --- swimming
// --- football
