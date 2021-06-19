function loadRepos() {
    const userInput = document.getElementById("username");
    let gitHubUrl = `https://api.github.com/users/${userInput.value}/repos`;
    const repoList = document.getElementById("repos");

    fetch(gitHubUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);
            repoList.textContent = "";

            if (data.message == "Not Found") {
				const li = document.createElement("li");
				li.textContent = data.message;
				repoList.appendChild(li);
            } else {
                data.forEach((element) => {
                    console.log(element.full_name);

                    const li = document.createElement("li");
                    const aTag = document.createElement("a");

                    aTag.href = element.html_url;
                    aTag.textContent = element.full_name;

                    li.appendChild(aTag);
                    repoList.appendChild(li);
                });

                userInput.value = "";
            }
        })
        .catch((error) => console.error(error));
    // console.log(userInput.value);
    // console.log(url);
}
