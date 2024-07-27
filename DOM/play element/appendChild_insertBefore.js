let lengthh = 5;
// appending 5 child boxs in parent div
for (let i = 0; i < lengthh; ++i) {
    const box = document.createElement("div");
    box.setAttribute("id",`child${i+1}`); //setting attribute
    box.className += "boxs"; //setting class
    box.style.border = "solid red";
    box.style.margin = "5px auto";
    box.style.backgroundColor = "orange"
    box.style.height = "40px";
    box.innerText = `child${i+1} boxs`;

    // appendChild
    const appendChild = document.querySelector(".parent");
    appendChild.appendChild(box);
}
// printing the childNodes in browser Console
const parent = document.querySelector(".parent");
console.log(parent.childNodes);


// move child5 above child1
const child5 = document.querySelector("#child5");
const child1 = document.querySelector("#child1");
// insertBefore(selectFrom,selectTo)
parent.insertBefore(child5,child1);