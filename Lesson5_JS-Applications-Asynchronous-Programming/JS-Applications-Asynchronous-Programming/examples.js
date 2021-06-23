function loadCommits() {
    // Try it with Fetch API
    let userName = document.getElementById('username').value;
    let repoVal = document.getElementById('repo').value;
    let ulList = document.getElementById('commits');
    let myPath = `https://api.github.com/repos/${userName}/${repoVal}/commits`
    async function findTheURL(myUrl) {
        try {
            let response = await fetch(myUrl);
            let usableData = await response.json();
            for(eachItem of usableData) {
                console.log(eachItem)
                let tempLi = document.createElement('li');
                tempLi.textContent = `${eachItem.commit.author.name}: ${eachItem.commit.message}`;
                console.log(tempLi)
                ulList.appendChild(tempLi)
            }
            return ulList
        } catch (errors) {
            return `${myResponse.status} ${myResponse.statusText}`;
        }
    }       
    findTheURL(myPath)
    let answerToPromise = new Promise((resolve, reject) => {
        fetch(`https://api.github.com/repos/${userName}/${repoVal}/commits`)
        .then((myResponse) => {
        if (myResponse.ok) {
            resolve (myResponse.json());
        } else {
            console.log(myResponse)
            reject (`${myResponse.status} ${myResponse.statusText}`);
        }
    })
    })
    answerToPromise.then((usableResponse) => {
        for(eachItem of usableResponse) {
            let tempLi = document.createElement('li');
            tempLi.textContent = `${eachItem.commit.author.name}: ${eachItem.commit.message}`;
            ulList.appendChild(tempLi)
        }
    })
    .catch((myResponseError) => {
        console.log(myResponseError);
    })
    fetch(`https://api.github.com/repos/${userName}/${repoVal}/commits`)
    .then((myResponse) => {
        if (myResponse.ok) {
            return myResponse.json();
        } else {
            throw new Error(`${myResponse.status} ${myResponse.statusText}`);
        }
    })
    .then((usableResponse) => { 
        for(eachItem of usableResponse) {
            let tempLi = document.createElement('li');
            tempLi.textContent = `${eachItem.commit.author.name}: ${eachItem.commit.message}`;
            ulList.appendChild(tempLi)
        }
    })
    .catch((myResponseError) => {
        console.log(myResponseError);
    })
}