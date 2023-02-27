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
  } else {
    dom.image.insertAdjacentHTML(
      "beforeend",
      `
  <div class="insert">
  </p></div>`
    );
  }
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
