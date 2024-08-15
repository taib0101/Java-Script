let display = (sum) => {
    console.log("sum is : ",sum);
};

let calculator = (number1,number2) => {
    let result = number1 + number2;
    console.log("Calling display function from calculator function");
    display(result);
};

calculator(2,3);
console.log("Calling display function directly");
display(10);
