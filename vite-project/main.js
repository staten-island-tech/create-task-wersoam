import "./style.css";
import { array } from "./array";

document.getElementById("dom").innerHTML = `
  <div>
  <img src="${array[1].picture}" alt="${array[1].name}"> <h2>${array[1].name}</h2>
  <p>From the country of japan arrives series that would be great kids T.V shows, if only they officially translate it</p>
  </div>
`;
