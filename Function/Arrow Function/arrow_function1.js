// arrow function was create for controlling "this keyword"
// go to "this keyword" directory for better understand

//with second bracket
let arrow_function = () => {
    return "hey bro";
} 
console.log(arrow_function());

//without curly or second bracket
//without bracket means it automatically return value
let arrow_function1 = (a, b) => a + b ;
console.log(arrow_function1(10,15));

//compare with function
let comaparee = (a,b) => a <= b && a !== b
console.log(comaparee(10,15));

let comaparee1 = (a,b) => a === b && a >= b
console.log(comaparee1(15,15));

comaparee1(10,10);//arrow function allow default return and don't return also
