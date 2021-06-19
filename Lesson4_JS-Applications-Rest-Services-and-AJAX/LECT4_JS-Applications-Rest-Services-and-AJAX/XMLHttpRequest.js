let button = document.querySelector("#load");
console.log("I'm the button", button);

button.addEventListener("click", function loadRepos() {
    // let url = "https://api.github.com/users/Cybre3/repos";
    // const httpRequest = new XMLHttpRequest();

    // httpRequest.addEventListener("readystatechange", function () {
    //     if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    //         console.log(httpRequest);
    //         document.getElementById("res").textContent =
    //             httpRequest.responseText;
    //     }
    // });

    // httpRequest.open("GET", url);
    // httpRequest.send();

    fetch("https://swapi.dev/api/people/16")
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data)))
        .catch((error) => console.error(error));
});
