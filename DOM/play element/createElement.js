// *insert parent in class="row"
// createElement("div")
// parent
const parent_div = document.createElement("div");
parent_div.setAttribute("class","parent");
parent_div.style.height = "150px";
parent_div.style.width = "150px";
parent_div.style.border = "dashed black";
parent_div.style.backgroundColor = "pink";
parent_div.style.textAlign = "center";
parent_div.style.fontWeight = "bold";
parent_div.style.display = "flex";
parent_div.style.flexDirection = "column";
parent_div.textContent = "Parent";
document.querySelector(".row").appendChild(parent_div); // *inserted in class="row"


// **insert child in class="parent"
// createElement("div")
// child
const child_div = document.createElement("div");
child_div.style.height = "50px";
child_div.style.width = "50px";
child_div.style.border = "dotted red";
child_div.style.display = "block";
child_div.style.backgroundColor = "pink";
child_div.style.textAlign = "center";
child_div.style.fontWeight = "bold";
child_div.style.alignSelf = "center";
child_div.style.margin = "20% 0";
child_div.textContent = "child";
document.querySelector(".parent").appendChild(child_div); // **inserted in class="parent"