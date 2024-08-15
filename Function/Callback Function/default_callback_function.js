// callback function means , making function as argument for specific function
// method 1:

let display = (sum) => {
    console.log("sum is : ",sum);
}

let calculator = (number1,number2,callback) => {
    let result = number1 + number2;
    if(callback === display) {
        console.log("callback function is exist");
        callback(result)
    } else {
        console.log("callback function is not exist,calling display function manually");
        display(result);
    }
};

//passing function as argument
calculator(2,3,display);
calculator(3,5);
