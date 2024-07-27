const parent = document.querySelector(".parent");

const beforeBegin_div = document.createElement("div");
beforeBegin_div.innerText = "beforeBegin";
beforeBegin_div.style.border = "solid";
beforeBegin_div.style.backgroundColor = "pink"

const afterBegin_div = document.createElement("div");
afterBegin_div.innerText = "afterBegin";
afterBegin_div.style.border = "solid";
afterBegin_div.style.backgroundColor = "brown";

const beforeEnd_div = document.createElement("div");
beforeEnd_div.innerText = "beforeEnd";
beforeEnd_div.style.border = "solid";
beforeEnd_div.style.backgroundColor = "white";
beforeEnd_div.style.margin = "203px 0";

const afterEnd_div = document.createElement("div");
afterEnd_div.innerText = "afterEnd";
afterEnd_div.style.border = "solid"
afterEnd_div.style.backgroundColor = "gold";


// insertAdjacentElement
parent.insertAdjacentElement("beforeBegin",beforeBegin_div);
parent.insertAdjacentElement("afterBegin",afterBegin_div);
parent.insertAdjacentElement("beforeEnd",beforeEnd_div);
parent.insertAdjacentElement("afterEnd",afterEnd_div);
// we can't insert twice for each Element which we declare once using insertAdjacentElement

// we can insert twice using insertAdjacentHTML,insertAdjacentText
// parent.insertAdjacentHTML("beforeBegin|afterBegin|beforeEnd|afterEnd",child);
// parent.insertAdjacentText("beforeBegin|afterBegin|beforeEnd|afterEnd",child);

console.log(parent);