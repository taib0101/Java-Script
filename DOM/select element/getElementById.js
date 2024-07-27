// select element by id
// method 1:
// document.getElementById("child1");
const getElementByID = document.getElementById("child1");
console.log("document.getElementById(\"child1\")");
console.log(getElementByID);

// method 2:
// document.querySelector("#child2");
const querySelector1 = document.querySelector("#child2");
console.log("document.querySelector(\"#child2\")");
console.log(querySelector1);

// method 2:
// document.querySelectorAll("#child2,#child3,#child4,#child5");
const querySelectorAll1 = document.querySelectorAll("#child2,#child3,#child4,#child5");
console.log("document.querySelectorAll(\"#child2,#child3,#child4,#child5\")");
console.log(querySelectorAll1);