let getData = async (api) => {
  let res = await fetch(api);
  let data = await res.json();
  return data;
};

let append = (data, content, container) => {
  //   console.log(data);
  container.innerHTML = null;
  data.forEach((e) => {
    let box = document.createElement("div");
    box.setAttribute("class", "news");
    let img = document.createElement("img");
    img.src = e.urlToImage;
    let h3 = document.createElement("h3");
    h3.innerText = e.title;
    let p = document.createElement("p");
    p.innerText = e.description;
    let p1 = document.createElement("p");
    p1.innerText = e.content;
    if (content) box.append(img, h3, p1);
    else {
      box.append(img, h3, p);
      box.addEventListener("click", () => {
        localStorage.setItem("news", JSON.stringify(e));
        window.location.href = "news.html";
      });
    }
    container.append(box);
  });
};

export { getData, append };
