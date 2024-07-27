// select by pseudo-class
// method 1:
// document.querySelector("li:first-child");
const querySelector5 = document.querySelector("li:first-child");
console.log("document.querySelector(\"li:first-child\");");
console.log(querySelector5);
console.log(querySelector5.childNodes[0]);



// method 2:
// document.querySelectorAll("li:first-child,li:last-child");
const querySelectorAll5 = document.querySelectorAll("li:first-child,li:last-child");
console.log("document.querySelectorAll(\"li:first-child,li:last-child\");");
console.log(querySelectorAll5);//doesn't need to use loop to see queries
console.log(querySelectorAll5[1].childNodes);