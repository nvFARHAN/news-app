// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";
import { getData, append } from "../scripts/fetch&append.js";

let container = document.querySelector("#results");
document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#sidebar").innerHTML = sidebar();

let print = async () => {
  let data = await getData(
    "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
  );
  append(data.articles, false, container);
};
print();

let input = document.querySelector("#search_input");
input.addEventListener("keydown", async () => {
  //   console.log(event.code);
  if (event.code == "Enter") {
    let query = input.value;
    localStorage.setItem("query", query);
    window.location.href = "search.html";
  }
});

let countries = document.querySelectorAll("#sidebar>h3");
for (let i = 0; i < countries.length; i++) {
  countries[i].addEventListener("click", async () => {
    // console.log(event.target.id);
    let api = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${event.target.id}`;
    let data = await getData(api);
    // console.log(data);
    append(data.articles, false, container);
  });
}
