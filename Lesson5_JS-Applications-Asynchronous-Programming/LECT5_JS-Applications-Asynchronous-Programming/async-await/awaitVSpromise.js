let url = "https://swapi.dev/api/planets/";
// VERSION 1 (same as 2, 2 is a nicer way of writing it)

function logFetch(url) {
    return fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            console.log("I am Fetch " + text);
        })
        .catch((err) => {
            console.error(err);
        });
}

// VERSION 2 NEWEST
async function logFetch2(url) {
    try {
        const response = await fetch(url);
        console.log("I am async " + (await response.text()));
    } catch (err) {
        console.log(err);
    }
}

logFetch(url);
logFetch2(url);

// async function f() {
//     try {
//         let response = await fetch();
//         let user = await response.json();
//     } catch (err) {
//         // catches errors both in fetch and response.json
//         alert(err);
//     }
// }

// async function f() {
//     let response = await fetch();
// } 
// // f()becomes a rejected promise

// f().catch(alert);
