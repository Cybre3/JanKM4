let src = `<ulid="contacts">{{#eachcontacts}}<li>{{name}}:{{email}}</li>{{/each}}</ul>3`;
let template3 = Handlebars.compile(src);

let context = {
  name: "Ivan Ivanov",
  phone: "0888 123 456",
  email: "i.ivanov@gmail.com",
};

let html = template3(context);
console.log(html);
document.getElementById("app3").innerHTML = html;
