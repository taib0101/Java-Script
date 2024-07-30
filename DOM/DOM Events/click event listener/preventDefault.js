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
    console.log("The value is : ",value);
    const newElement = document.createElement("p");
    newElement.className = "digit";
    newElement.style.backgroundColor = "grey";
    newElement.innerText = value;
    displayChild.appendChild(newElement);
};

grandParent.addEventListener("click" , (event) => {
    console.log("grand parent bubble");
});

parent.addEventListener("click" , (event) => {
    console.log("parent bubble");
});

displayChild.addEventListener("click" , (event) => {
    console.log("display bubble");
});

buttonChild.addEventListener("click" , (event) => {
    console.log("button bubble");
});


//  when we click on anchor tag link it take to a website default way but we can prevent it 
//  with preventDefault . we can prevent any default behaviour by preventDefault
one.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(one.getAttribute("value"));
    console.log("one bubble");
});

two.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(two.getAttribute("value"));
    console.log("two bubble");
});

three.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(three.getAttribute("value"));
    console.log("three bubble");
});

four.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(four.getAttribute("value"));
    console.log("four bubble");
});

five.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(five.getAttribute("value"));
    console.log("five bubble");
});

six.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(six.getAttribute("value"));
    console.log("six bubble");
});

seven.addEventListener("click" , (event) => {
    displayDigit(seven.getAttribute("value"));
    console.log("seven bubble");
});

eight.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(eight.getAttribute("value"));
    console.log("eight bubble");
});

nine.addEventListener("click" , (event) => {
    event.preventDefault();
    displayDigit(nine.getAttribute("value"));
    console.log("nine bubble");
});
