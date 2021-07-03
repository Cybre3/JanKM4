const contactDiv = document.getElementById("contacts");

let nameCardHtml = `
{{#each this}}
<div class="contact card">
      <div>
        <i class="far fa-user-circle gravatar"></i>
      </div>
      <div class="info">
        <h2>{{this.name}}</h2>
        <button class="detailsBtn" onclick="showDetails({{this.id}})">Details</button>
        <div class="details" id="{{this.id}}">
          <p>Phone number: {{this.phoneNumber}}</p>
          <p>Email: {{this.email}}</p>
        </div>
      </div>
      </div>
      {{/each}}
    `;
let nameCardTemplate = Handlebars.compile(nameCardHtml);
contactDiv.innerHTML = nameCardTemplate(contacts);

function showDetails(contactId) {
  const thisDivsContactInfo = document.getElementById(contactId);

  thisDivsContactInfo.style.display === "block"
    ? (thisDivsContactInfo.style.display = "none")
    : (thisDivsContactInfo.style.display = "block");
}
