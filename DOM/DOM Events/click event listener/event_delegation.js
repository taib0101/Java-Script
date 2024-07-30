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
    newElement.style.cursor = "pointer";
    displayChild.appendChild(newElement);
};

// event delegation
// event Delegation means parent take responsible from child to 
// delegate the element,and top child always be targeted to parent,grandparent 
grandParent.addEventListener("click" , (event) => {
    console.log(event.target);
    console.log("grand parent bubble");
});

parent.addEventListener("click" , (event) => {
    console.log(event.target);
    console.log("parent bubble");
});

displayChild.addEventListener("click" , (event) => {
    console.log(event.target);


    // querySelector("#something").className|.style|.matches("div|#display_child|.col-12")
    // event.target.className|.style|.matches("div|#element1|.digit")
    if(event.target.matches("p"))
        event.target.remove();
    // if(event.target.className === "digit")
    //     event.target.remove();
    console.log("display bubble");
});

buttonChild.addEventListener("click" , (event) => {
    console.log(event.target);
    console.log("button bubble");
});


one.addEventListener("click" , (event) => {
    displayDigit(one.getAttribute("value"));
    console.log(event.target);
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

//event Delegation means parent take responsible from child to 
// delegate the element

// grand parent------
//    |             |
// parent------------
//    |       |     |
// display  button  |
//    |       |     |
//newElement one,two,three
//         four,five,six
//         seven,eight,nine

// that child will be target to grandparent or parent directly

// if you want to see output press "1" and got browser console
//now delete display element