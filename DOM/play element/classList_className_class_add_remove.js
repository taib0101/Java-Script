// *insert parent in class="row"
// parent
const parent_div = document.createElement("div");


// c;ass adding
// classList.add 
// this property doesn't support few browser,so this is not better practice
parent_div.classList.add("parent");

// className
// this is better practice 
parent_div.className += " parent1 parent2 parent3";



// class removing
// classList.remove 
// but not better practice
parent_div.classList.remove("parent1");

// className.replace
parent_div.className = parent_div.className.replace("parent2","");
























parent_div.textContent = "Parent";
parent_div.style.height = "150px";
parent_div.style.width = "150px";
parent_div.style.border = "solid blue";
parent_div.style.borderRadius = "15%";
parent_div.style.backgroundColor = "yellow";
parent_div.style.textAlign = "center";
parent_div.style.fontWeight = "bold";
parent_div.style.display = "flex";
parent_div.style.margin = "0 auto";
parent_div.style.flexDirection = "column";
document.querySelector(".row").appendChild(parent_div); // *inserted in class="row"


// **insert child in class="parent"
// child
const child_div = document.createElement("div");
// innerText
child_div.innerText = "child";
child_div.style.height = "50px";
child_div.style.width = "50px";
child_div.style.border = "dashed red";
child_div.style.borderRadius = "15%";
child_div.style.display = "block";
child_div.style.backgroundColor = "orange";
child_div.style.textAlign = "center";
child_div.style.fontWeight = "bold";
child_div.style.alignSelf = "center";
child_div.style.margin = "20% auto";
document.querySelector(".parent").appendChild(child_div); // **inserted in class="parent"