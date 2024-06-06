//with second bracket
let arrow_function = () => {
    return "hey bro";
} 
console.log(arrow_function());

//without curly ow second bracket
let arrow_function1 = (a, b) => a + b ;
console.log(arrow_function1(10,15));

//is this function ? true or false
let check = (arrow_function1) => {
    return arrow_function1 instanceof Function;
}

console.log("Does arrow_function1 exists ? ",check(arrow_function1) ? "Yes" : "No");
console.log(isNaN("Taib"));//NaN full form is Not a Number

//compare with function
let comaparee = (a,b) => a <= b && a !== b
console.log(comaparee(10,15));

let comaparee1 = (a,b) => a === b && a >= b
console.log(comaparee1(15,15));

comaparee1(10,10);//arrow function allow default return and don't return also