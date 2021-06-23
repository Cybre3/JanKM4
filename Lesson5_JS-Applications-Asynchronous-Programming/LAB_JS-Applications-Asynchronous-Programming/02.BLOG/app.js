function attachEvents() {
    let btnLoadPosts = document.getElementById("btnLoadPosts");
    let btnViewPosts = document.getElementById("btnViewPost");
    const dropDown = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    btnLoadPosts.addEventListener("click", function () {
        console.log("The button has been Clicked! ");
        let imAPromise = fetch(
            "https://blog-apps-c12bf.firebaseio.com/posts.json"
        ); // I'm a new promise! I ahve a res, reject

        imAPromise
            .then((response) => {
                dropDown.textContent = "";
                return response.json();
            })
            .then((data) => {
                console.log(data);

                for (let objName in data) {
                    console.log(objName, data[objName].title);
                    let newOpt = document.createElement("option");
                    newOpt.value = objName;
                    newOpt.textContent = data[objName].title;
                    dropDown.appendChild(newOpt);
                }
            })
            .catch((err) => console.log(err));
    });

    btnViewPosts.addEventListener("click", function () {
        console.log("View btn value ", dropDown.value);
        let thePost = fetch(
            `https://blog-apps-c12bf.firebaseio.com/posts/${dropDown.value}.json`
        );

        thePost
            .then((response) => {
                postTitle.textContent = "";
                postBody.textContent = "";
                postComments.textContent = "";
                return response.json();
            })
            .then((data) => {
                console.log(data);
                postTitle.textContent = data.title;
                postBody.textContent = data.body;
                data.comments.forEach((comment) => {
                    let newLi = document.createElement("li");
                    newLi.textContent = comment.text;
                    postComments.appendChild(newLi);
                });
            })
            .catch((err) => console.log(err));
    });
}

attachEvents();
