const grandParent = document.querySelector("#grand_parent");
const parent = document.querySelector("#parent");
const displayChild = document.querySelector("#display_child");
const buttonChild = document.querySelector("#button_child");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

window.addEventListener("DOMContentLoaded" , (event) => {
    // it will give output after loaded only for all document not window pages
    console.log("Full Document Element has loaded");
});

let displayDigit = (value) => {
    // console.log("The value is : ",value);
    const newElement = document.createElement("p");
    newElement.className = "digit";
    newElement.style.backgroundColor = "grey";
    newElement.innerText = value;
    newElement.style.cursor = "pointer";
    displayChild.appendChild(newElement);
};

// 
grandParent.addEventListener("click" , (event) => {
});

parent.addEventListener("click" , (event) => {
    event.stopPropagation();
});

displayChild.addEventListener("click" , (event) => {
    if(event.target.matches("p"))
        event.target.remove();
});

buttonChild.addEventListener("click" , (event) => {
});


one.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(one.getAttribute("value"));
});

two.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(two.getAttribute("value"));
});

three.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(three.getAttribute("value"));
});

four.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(four.getAttribute("value"));
});

five.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(five.getAttribute("value"));
});

six.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(six.getAttribute("value"));
});

seven.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(seven.getAttribute("value"));
});

eight.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(eight.getAttribute("value"));
});

nine.addEventListener("click" , (event) => {
    event.stopPropagation();
    displayDigit(nine.getAttribute("value"));
});