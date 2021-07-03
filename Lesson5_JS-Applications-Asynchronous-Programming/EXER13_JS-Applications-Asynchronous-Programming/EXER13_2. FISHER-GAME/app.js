// catch log elements

let catchesDiv = document.getElementById("catches");
let loadBtn = document.getElementsByClassName("load")[0];
let addBtn = document.querySelector("button.add");

loadBtn.addEventListener("click", loadCatches);

async function fetchCatches() {
  const response = await fetch(
    "https://fisher-game.firebaseio.com/catches.json"
  );

  if (!response.ok) {
    const message = `Some error, ${response.status}`;
    throw new Error(message);
  }

  const catches = await response.json();
  return catches;
}

function loadCatches() {
  console.log("load catches button lcicked");
  let catchesHTML = '';
  let fetchedCatches = fetchCatches();
}

let tempJSON = {
  "-Ma0AWCTEsnwOksI1QpI": {
    angler: "BIG FISH",
    bait: "NONE",
    captureTime: "51",
    location: "ALL",
    species: "FISH",
    weight: "2",
  },
  "-Ma0Gq-z5xxnDXxtSdg-": {
    angler: "111111",
    bait: "11111",
    captureTime: "11111",
    location: "11111",
    species: "1111111",
    weight: "1111111",
  },
  "-Ma0HeCbmOd7_4rkwOTr": {
    angler: "a222",
    bait: "222",
    captureTime: "222",
    location: "222",
    species: "222",
    weight: "2222",
  },
  "-McG0gpT6H1JlFHqI2Uo": {
    angler: "klenaaaa",
    bait: "lure",
    captureTime: "12",
    location: "malilag",
    species: "wqfq",
    weight: "4",
  },
  "-McjEQQfELVFdHyHwYIn": {
    angler: "dsfsdf",
    bait: "akdksksd",
    captureTime: "4",
    location: "aloooo",
    species: "aloooo",
    weight: "4",
  },
  "-McjJK16a5bX134OHDK6": {
    angler: "sssss",
    bait: "aaaaaaaaaa",
    captureTime: "4",
    location: "aaaaaaaaaaa",
    species: "aaaaaaaa",
    weight: "-4",
  },
  "-Mctc2CNQK2-UCXJ9r-z": {
    angler: "Zaphod",
    bait: "Babel Fish",
    captureTime: "23:42",
    location: "Milky Way",
    species: "Alien Shark",
    weight: "200",
  },
  "-McyVqIUe1DjWi4mR5H6": {
    Angler: "asd",
    Bait: "123",
    CaptureTime: "123",
    Location: "123",
    Species: "123",
    Weight: "1",
  },
  "-MdJvRb-Ndwtm6hx8Z3K": {
    angler: "C3P0",
    bait: "Frog",
    weight: "0",
  },
  "-MdJvT8EnSs1E01LHOn4": {
    angler: "C3P0",
    bait: "Frog",
    captureTime: "2400",
    location: "Saturn",
    species: "Super Fun",
    weight: "0",
  },
  "-MdJvUfBf_cnoPngxZc2": {
    angler: "CPO",
    bait: "Bread",
    captureTime: "48",
    location: "Sandanski",
    weight: "200",
  },
  "-MdJv_u8Z1v8ABWhznuA": {
    angler: "Maverick",
    bait: "Squigglies",
    captureTime: "26000",
    location: "Dallas",
    species: "Big",
    weight: "100",
  },
  "-MdJva_SCUe63mK6WFTI": {
    angler: "C3P0 JCramer",
    bait: "Frog",
    captureTime: 2400,
    location: "Saturn",
    species: "Super Fun",
  },
  "-MdJy62m0lid11Ma_g07": {
    angler: "Gemini",
    bait: "worms",
    captureTime: "3605",
    location: "Lake Erry",
    species: "XL",
    weight: "200",
  },
  our_unique_key: {
    angler: "Maverick",
    bait: "Squigglies",
    captureTime: "26000",
    location: "Fort Worth",
    species: "Big",
    weight: "100",
  },
};
