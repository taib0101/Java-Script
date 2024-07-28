// querySelector
const calculator = document.querySelector("#calculator");

const display = document.querySelector("#display");
const keyboard = document.querySelector("#keyboard");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const dot = document.querySelector("#dot");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const clear = document.querySelector("#clear");
const all_Clear = document.querySelector("#all_clear");

//initiated the values 
let zeroo = zero.getAttribute("value");
let onee = one.getAttribute("value");
let twoo = two.getAttribute("value");
let threee = three.getAttribute("value");
let fourr = four.getAttribute("value");
let fivee = five.getAttribute("value");
let sixx = six.getAttribute("value");
let sevenn = seven.getAttribute("value");
let eightt = eight.getAttribute("value");
let ninee = nine.getAttribute("value");
let divi = division.getAttribute("value");
let multi = multiplication.getAttribute("value");
let pluss = plus.getAttribute("value");
let minuss = minus.getAttribute("value");
let dott = dot.getAttribute("value");

// creating default display , where i want to show the primary display of equation
const defaultDisplay = document.createElement("div");
defaultDisplay.style.height = "30px";
defaultDisplay.style.textAlign = "end";
defaultDisplay.style.borderTop = "solid 2px";
defaultDisplay.style.backgroundColor = "pink";
// defaultDisplay.style.position = "fixed";
defaultDisplay.setAttribute("id","display_default_child");
display.appendChild(defaultDisplay);

//inserting digit
let insert_digits = (values) => {
    defaultDisplay.innerText += values;
}

//removing digits
let remove_digits = () => {
    defaultDisplay.innerText = defaultDisplay.innerText.slice(0,defaultDisplay.innerText.length-1);
}

equal.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("equal bubble");

    // creating div of previous display of equation
    if(defaultDisplay.innerText !== "") {
        const previousDisplay = document.createElement("div");
        previousDisplay.style.height = "max-content";
        previousDisplay.style.textAlign = "end";
        previousDisplay.style.border = "solid 2px";
        previousDisplay.style.backgroundColor = "grey";
        previousDisplay.innerText = defaultDisplay.innerText;
        previousDisplay.className = "previous_childs";
        display.insertBefore(previousDisplay,defaultDisplay);
    }
    defaultDisplay.innerText = "";
});

clear.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("clear bubble");
    remove_digits();
});

all_clear.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("all_clear bubble");
    const display_child = document.querySelectorAll(".previous_childs:not(#display_default_child)");
    display_child.forEach( (value) => value.remove());
    defaultDisplay.innerText = "";
});

calculator.addEventListener("click" , (event) => {
    console.log("calculator bubble");
    // console.log(newdiv.innerText);
});






















display.addEventListener("click" , (event) => {
    event.stopPropagation();
});

dot.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("dot bubble");
    insert_digits(dott);
});

zero.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("zero bubble");
    insert_digits(zeroo);
});

one.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("one bubble");
    insert_digits(onee);
});

two.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("two bubble");
    insert_digits(twoo);
});

three.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("three bubble");
    insert_digits(threee);
});

four.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("four bubble");
    insert_digits(fourr);
});

five.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("five bubble");
    insert_digits(fivee);
});

six.addEventListener("click" , (event) => {
    event.stopPropagation();
    // arr.push(sixx);
    console.log("six bubble");
    insert_digits(sixx);
});

seven.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("seven bubble");
    insert_digits(sevenn);
});

eight.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("eight bubble");
    insert_digits(eightt);
});

nine.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("nine bubble");
    insert_digits(ninee);
});

division.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("division bubble");
    insert_digits(divi);
});

multiplication.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("multiplication bubble");
    insert_digits(multi);
});

plus.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("plus bubble");
    insert_digits(pluss);
});

minus.addEventListener("click" , (event) => {
    event.stopPropagation();
    console.log("minus bubble");
    insert_digits(minuss);
});
