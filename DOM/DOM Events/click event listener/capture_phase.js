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

// capture phase
grandParent.addEventListener("click" , (event) => {
    console.log("grand parent bubble");
} , {capture:true});

parent.addEventListener("click" , (event) => {
    console.log("parent bubble");
} , {capture:true});

displayChild.addEventListener("click" , (event) => {
    console.log("display bubble");
});

buttonChild.addEventListener("click" , (event) => {
    console.log("button bubble");
});


one.addEventListener("click" , (event) => {
    displayDigit(one.getAttribute("value"));
    console.log("one bubble");
});

two.addEventListener("click" , (event) => {
    displayDigit(two.getAttribute("value"));
    console.log("two bubble");
});

three.addEventListener("click" , (event) => {
    displayDigit(three.getAttribute("value"));
    console.log("three bubble");
});

four.addEventListener("click" , (event) => {
    displayDigit(four.getAttribute("value"));
    console.log("four bubble");
});

five.addEventListener("click" , (event) => {
    displayDigit(five.getAttribute("value"));
    console.log("five bubble");
});

six.addEventListener("click" , (event) => {
    displayDigit(six.getAttribute("value"));
    console.log("six bubble");
});

seven.addEventListener("click" , (event) => {
    displayDigit(seven.getAttribute("value"));
    console.log("seven bubble");
});

eight.addEventListener("click" , (event) => {
    displayDigit(eight.getAttribute("value"));
    console.log("eight bubble");
});

nine.addEventListener("click" , (event) => {
    displayDigit(nine.getAttribute("value"));
    console.log("nine bubble");
});

// capture will give output frist
// bubble will give  output second

//                  capture phase
//                      ^
// parent bubble        |
// grand parent bubble--|

// one bubble-----------| 
// button bubble        |
//                      V
//                  bubble phase