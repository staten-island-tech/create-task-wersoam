import "./style.css";
import { array } from "./array";

document.getElementById("dom").innerHTML = `
<div class="insert">
<img src="${array[8].picture}" alt="${array[8].name}" class="img"> </div>
<div class="almighty"><h2>${array[8].name}</h2> <p>${array[8].desc}</p></div>

`;
