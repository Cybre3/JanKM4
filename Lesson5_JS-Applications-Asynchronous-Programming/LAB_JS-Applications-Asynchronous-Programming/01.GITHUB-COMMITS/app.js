function loadCommits() {
    const userName = document.getElementById("username").value;
    const repoValue = document.getElementById("repo").value;
    let gitHubUrl = `https://api.github.com/repos/${userName}/${repoValue}/commits`;
    let repoList = document.getElementById("commits");

    fetch(gitHubUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(response);
                throw new Error(`${response.status} ${response.statusText}`);
            }
        })
        .then((data) => {
            console.log(data);

            for (let eachCommit of data) {
                console.log(eachCommit);
                let newLi = document.createElement("li");
                newLi.textContent = `${eachCommit.commit.author.name}: ${eachCommit.commit.message}`;
                repoList.appendChild(newLi);
            }
        })
        .catch((error) => console.log(error));
}
