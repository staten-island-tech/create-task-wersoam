import "./style.css";
import { array } from "./array";

const clear = function () {
  dom.image.innerHTML = "";
};

const add = function () {
  if (dom.input.value === "kamen rider revice") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[8].picture}" alt="${array[8].name}" class="img"> </div>
<div class="almighty"><h2>${array[8].name}</h2><h3>${array[8].episodes} episodes</h3> <p>${array[8].desc}</p></div>

`
    );
  } else if (dom.input.value === "kamen rider ex-aid") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[0].picture}" alt="${array[0].name}" class="img"> </div>
<div class="almighty"><h2>${array[0].name}</h2> <h3>${array[0].episodes} episodes</h3> <p>${array[0].desc}</p></div>

`
    );
  } else if (dom.input.value === "kamen rider build") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[1].picture}" alt="${array[1].name}" class="img"> </div>
<div class="almighty"><h2>${array[1].name}</h2> <h3>${array[1].episodes} episodes</h3> <p>${array[1].desc}</p></div>

`
    );
  } else if (dom.input.value === "ultraman dyna") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[2].picture}" alt="${array[2].name}" class="img"> </div>
<div class="almighty"><h2>${array[2].name}</h2> <h3>${array[2].episodes} episodes</h3> <p>${array[2].desc}</p></div>

`
    );
  } else if (dom.input.value === "dekaranger") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[3].picture}" alt="${array[3].name}" class="img"> </div>
<div class="almighty"><h2>${array[3].name}</h2> <h3>${array[3].episodes} episodes</h3> <p>${array[3].desc}</p></div>

`
    );
  } else if (dom.input.value === "shinkenger") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[4].picture}" alt="${array[4].name}" class="img"> </div>
<div class="almighty"><h2>${array[4].name}</h2> <h3>${array[4].episodes} episodes</h3> <p>${array[4].desc}</p></div>

`
    );
  } else if (dom.input.value === "ultraman orb") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[5].picture}" alt="${array[5].name}" class="img"> </div>
<div class="almighty"><h2>${array[5].name}</h2> <h3>${array[5].episodes} episodes</h3> <p>${array[5].desc}</p></div>

`
    );
  } else if (dom.input.value === "kamen rider w") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[6].picture}" alt="${array[6].name}" class="img"> </div>
<div class="almighty"><h2>${array[6].name}</h2> <h3>${array[6].episodes} episodes</h3> <p>${array[6].desc}</p></div>

`
    );
  } else if (dom.input.value === "kamen rider zero-one") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[7].picture}" alt="${array[7].name}" class="img"> </div>
<div class="almighty"><h2>${array[7].name}</h2> <h3>${array[7].episodes} episodes</h3> <p>${array[7].desc}</p></div>

`
    );
  } else if (dom.input.value === "kamen rider revice") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[8].picture}" alt="${array[8].name}" class="img"> </div>
<div class="almighty"><h2>${array[8].name}</h2> <h3>${array[8].episodes} episodes</h3> <p>${array[8].desc}</p></div>

`
    );
  } else if (dom.input.value === "ultraman decker") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[9].picture}" alt="${array[9].name}" class="img"> </div>
<div class="almighty"><h2>${array[9].name}</h2> <h3>${array[9].episodes} episodes</h3> <p>${array[9].desc}</p></div>

`
    );
  } else if (dom.input.value === "ultraman taiga") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[10].picture}" alt="${array[10].name}" class="img"> </div>
<div class="almighty"><h2>${array[10].name}</h2> <h3>${array[10].episodes} episodes</h3> <p>${array[10].desc}</p></div>

`
    );
  } else if (dom.input.value === "donbrothers") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[11].picture}" alt="${array[11].name}" class="img"> </div>
<div class="almighty"><h2>${array[11].name}</h2> <h3>${array[11].episodes} episodes</h3> <p>${array[1].desc}</p></div>

`
    );
  } else if (dom.input.value === "zenkaiger") {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
<div class="insert">
<img src="${array[12].picture}" alt="${array[12].name}" class="img"> </div>
<div class="almighty"><h2>${array[12].name}</h2> <h3>${array[12].episodes} episodes</h3> <p>${array[12].desc}</p></div>

`
    );
  } else {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
  <div class="insert">
  <h1>sorry, that doesn't exist in the array, please try again</h1></div>`
    );
  }
};
const reiwa = function () {
  array
    .filter((hei) => hei.time === "reiwa")
    .forEach((array) =>
      dom.image.insertAdjacentHTML(
        "beforeend",
        `
<div class="insert2">
<img src="${array.picture}" alt="${array.name}" class="img"> </div>
<div class="almighty"><h2>${array.name}</h2> <h3>${array.episodes} episodes</h3> <p>${array.desc}</p></div>

`
      )
    );
};
const heisei = function () {
  array
    .filter((hei) => hei.time === "heisei")
    .forEach((array) =>
      dom.image.insertAdjacentHTML(
        "beforeend",
        `
<div class="insert2">
<img src="${array.picture}" alt="${array.name}" class="img"> </div>
<div class="almighty"><h2>${array.name}</h2> <h3>${array.episodes} episodes</h3> <p>${array.desc}</p></div>

`
      )
    );
};
const dom = {
  input: document.getElementById("input"),
  image: document.getElementById("dom"),
  button: document.getElementById("era"),
  button2: document.getElementById("era2"),
  enter: document.getElementById("enter"),
};

dom.enter.addEventListener("click", function () {
  clear();
  add();
});
dom.button.addEventListener("click", function () {
  clear();
  heisei();
});
dom.button2.addEventListener("click", function () {
  clear();
  reiwa();
});
