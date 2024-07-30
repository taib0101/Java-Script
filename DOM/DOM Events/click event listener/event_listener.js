const grandParent = document.querySelector("#grand_parent");
const parent = document.querySelector("#parent");
const displayChild = document.querySelector("#display_child");
const keyboardChild = document.querySelector("#keyboard_child");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

let displayDigit = (value) => {
    console.log("The value is : ",value);
    const newElement = document.createElement("p");
    newElement.className = "digit";
    newElement.style.backgroundColor = "grey";
    newElement.innerText = value;
    displayChild.appendChild(newElement);
};


one.addEventListener("click" , (event) => {
    console.log("one bubble");
    displayDigit(one.getAttribute("value"));
});

two.addEventListener("click" , (event) => {
    console.log("two bubble");
    displayDigit(two.getAttribute("value"));
});

three.addEventListener("click" , (event) => {
    console.log("three bubble");
    displayDigit(three.getAttribute("value"));
});

four.addEventListener("click" , (event) => {
    console.log("four bubble");
    displayDigit(four.getAttribute("value"));
});

five.addEventListener("click" , (event) => {
    console.log("five bubble");
    displayDigit(five.getAttribute("value"));
});

six.addEventListener("click" , (event) => {
    console.log("six bubble");
    displayDigit(six.getAttribute("value"));
});

seven.addEventListener("click" , (event) => {
    console.log("seven bubble");
    displayDigit(seven.getAttribute("value"));
});

eight.addEventListener("click" , (event) => {
    console.log("eight bubble");
    displayDigit(eight.getAttribute("value"));
});

nine.addEventListener("click" , (event) => {
    console.log("nine bubble");
    displayDigit(nine.getAttribute("value"));
});