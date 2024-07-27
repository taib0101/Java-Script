// select element by tagname
// method 1:
// document.getElementsByTagName("div")
const getElementsByTagName = document.getElementsByTagName("div");
console.log("document.getElementsByTagName(\"div\")");
console.log("length: ",getElementsByTagName.length);
console.log("getElementsByTagName all without loop");
console.log(getElementsByTagName);
console.log("getElementsByTagName selector all with loop");
for (const i of getElementsByTagName) {
    console.log(i);
}

// method 2:
// document.querySelector("div")
const querySelector3 = document.querySelector("div");
console.log("document.querySelector(\"div\")");
console.log(querySelector3);

// method 3:
// document.querySelectorAll(\"div,p\")
const querySelectorAll3 = document.querySelectorAll("div,p");
console.log("document.querySelectorAll(\"div,p\")");
console.log(querySelectorAll3);