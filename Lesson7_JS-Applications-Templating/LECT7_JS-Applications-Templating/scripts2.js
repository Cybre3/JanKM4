let src = `<article>
<div class="title">
    {{name}}
    <button>&#8505;</button>
</div>
<div class="info">
    <span>&phone;{{phone}}</span>
    <span>&#9993;{{email}}</span>
</div>
</article>`;
let template2 = Handlebars.compile(src);

let context = {
  name: "Ivan Ivanov",
  phone: "0888 123 456",
  email: "i.ivanov@gmail.com",
};

let html = template2(context);
console.log(html);
document.getElementById('app2').innerHTML = html;