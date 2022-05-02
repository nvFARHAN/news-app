// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
import { append } from "./fetch&append.js";

let container = document.querySelector("#detailed_news");
document.querySelector("#navbar").innerHTML = navbar();

let main = () => {
  let data = JSON.parse(localStorage.getItem("news"));
  console.log(data);
  append([data], true, container);
};
main();

let input = document.querySelector("#search_input");
input.addEventListener("keydown", async () => {
  //   console.log(event.code);
  if (event.code == "Enter") {
    let query = input.value;
    localStorage.setItem("query", query);
    window.location.href = "search.html";
  }
});
