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

let displayDigit = (value) => {
    // console.log("The value is : ",value);
    const newElement = document.createElement("p");
    newElement.className = "digit";
    newElement.style.backgroundColor = "grey";
    newElement.innerText = value;
    displayChild.appendChild(newElement);
};

// 
grandParent.addEventListener("click" , (event) => {
    console.log("grand parent bubble");
});

parent.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("parent bubble");
});

displayChild.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("display bubble");
});

buttonChild.addEventListener("click" , (event) => {
    console.log("button bubble");
});


one.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("one bubble");
    displayDigit(one.getAttribute("value"));
});

two.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("two bubble");
    displayDigit(two.getAttribute("value"));
});

three.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("three bubble");
    displayDigit(three.getAttribute("value"));
});

four.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("four bubble");
    displayDigit(four.getAttribute("value"));
});

five.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("five bubble");
    displayDigit(five.getAttribute("value"));
});

six.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("six bubble");
    displayDigit(six.getAttribute("value"));
});

seven.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("seven bubble");
    displayDigit(seven.getAttribute("value"));
});

eight.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("eight bubble");
    displayDigit(eight.getAttribute("value"));
});

nine.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("nine bubble");
    displayDigit(nine.getAttribute("value"));
});