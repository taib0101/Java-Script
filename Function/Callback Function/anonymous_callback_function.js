// method 2:
// anonymous callback function
let calculator = (number1,number2,callback) => {
    let result = number1 + number2;
    callback(result);
};

console.log("anonymous calling function");
calculator(2,3, (sum) => {
    console.log("sum is : ",sum);
});
