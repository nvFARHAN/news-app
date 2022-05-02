// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import { getData, append } from "../scripts/fetch&append.js";

let container = document.querySelector("#results");
document.querySelector("#navbar").innerHTML = navbar();

let query = localStorage.getItem("query");

let main = async () => {
  let data = await getData(
    `https://masai-mock-api.herokuapp.com/news?q=${query}`
  );

  append(data.articles, false, container);
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
