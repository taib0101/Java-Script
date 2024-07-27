// select parent through child
// method 1:
// document.querySelector(".row div");
const querySelector6 = document.querySelector(".row .parent");
console.log("document.querySelector(\".row .parent\")");
console.log(querySelector6);


// method 2:
// document.querySelectorAll(".row div");
const querySelectorAll6 = document.querySelectorAll(".row .parent,.parent #child4");
console.log("document.querySelectorAll(\".row .parent,.parent .child4\");");
console.log(querySelectorAll6);