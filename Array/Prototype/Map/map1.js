let arr = ["bro,",",Taib","Char,my"];//split works for string ,split convert to array,join convert array to typeof string
arr = arr.map(numbers => numbers.split(",").join(""));
console.log(arr);

//method 1
console.log("\n1");
let arr1 = [1,2,3,4,5];
arr1 = arr1.map((numbers) => numbers*2);
console.log(arr1);

//method 2
console.log("\n2");
let arr2 = [1.23,2.32,3.12,4.45,5.55].map((numbers) => Math.floor(numbers-1));
console.log(arr2);

console.log("\n 3");
let arr3 = ["1","2","3"].map((numbers) => parseInt(numbers)); //default return because completed in one line
console.log(arr3);

//like this way
// arr = arr.map((number) => {
//     if(typeof number == 'string' && number.length != 1)
//         return "This is not a number";
//     else
//     {
//         number = parseInt(number);
//         console.log(number);
//     }
//     return number;
// });

console.log("\n 4");
let arr4 = [1.2,2.1,3.2,4.9].map(numbers => parseInt(numbers));
console.log(arr4);

//method 3
let arr5 = [
    {Name : "Taib",Roll : "1"},
    {Name : "Charmy",Roll : "2"},
    {Name : "Ifty",Roll : "3"}
];
arr5 = arr5.map( ( {Name,Roll} ) => ( {[Name] : Roll} ));
console.log(arr5);

//method 4
let arr6 = [10,5,100,200,20,40,50,500];
arr6 = arr6.filter((numbers) => {
    if(numbers <= 50)
        return numbers;
}).map((numbers) => numbers * 2);
console.log(arr6);//output : [ 10, 5, undefined, undefined, 20, 40, 50, undefined ]

console.log(Array.prototype.map.call(arr6,(x) => x*2));

