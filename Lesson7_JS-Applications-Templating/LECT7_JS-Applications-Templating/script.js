let theObject = {
  name: "SirLoin",
  favColor: "Blue",
};
let people = [
  {
    name: "person1",
    favColor: "Purple",
  },
  {
    name: "person2",
    favColor: "Green",
  },
];
// let template = Handlebars.compile("<h1>Hello {{#each people}}
// <li>{{this}}</li>
// {{/each}}
// </h1>");
let template = Handlebars.compile("<h1>Hello {{name}} {{favColor}}</h1>");

let container = document.getElementById("app");
container.innerHTML = template(theObject);

// does not work without express
// const Handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));
