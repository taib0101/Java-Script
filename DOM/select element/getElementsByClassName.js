// select element by classname
// method 1:
// document.getElementsByClassName("box")
const getElementsByClassName = document.getElementsByClassName("box");
console.log("document.getElementsByClassName(\"box\")");
console.log("length: ",getElementsByClassName.length);
for (const i of getElementsByClassName) {
    console.log(i);
    i.style.backgroundColor = "blue";
    //bootstrap background will not change
}


// method 2:
// document.querySelectorAll(".box")
const querySelector2 = document.querySelector(".box");
console.log("document.querySelector(\".box\")");
console.log(querySelector2);


// method 3:
// document.querySelectorAll(".box")
// if you want to select only one class use querySelector ,it will show first element
const querySelectorAll2 = document.querySelectorAll(".box");
console.log("document.querySelectorAll(\".box\")");
const boxarray = Array.prototype.slice.call(querySelectorAll2);
console.log("boxarray", boxarray);
console.log("query selector all without loop");
console.log(querySelectorAll2);
console.log("query selector all with loop");
for (const i of getElementsByClassName) {
    console.log(i);
}