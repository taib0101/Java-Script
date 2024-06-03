//array 1D
//Method 1: Array Literal
let arr = [1]; //let arr = [1,2,3,4]
arr.push(3,10);
console.log(arr.join(" "));

// //Method 2: Array Constructor
let arr2 = new Array(); 
//let arr2 = new Array(5); //with length

// Method 3: with undefined values
// let arr3 = new Array(5).fill(undefined);
let arr3 = new Array(5).fill(1);
console.log(arr3.join(" "));
arr3.push("Taib");

// Method 4:using array form
// let arr4 = Array.from({length: 5}).fill(8);
let arr4 = Array.from({length: 5}); //initialized undefined 
console.log(arr4);
console.table(arr4);

result = ""
for(let i in arr3)
{
    result = result + " " + arr3[i];
    console.log(arr3[i]);
}
console.log(result);

//size of array
size = arr3.length;
console.log("size of arr3 is : %d",size);
// console.log("size of arr3 is : " + size);

result = "";
for(let i = 0; i < size; ++i)
{
    result += " " + arr3[i];
}
console.log(result);

//finding index of array element
console.log("changing");
arr3[4] = 2
let index = arr3.indexOf("Taib");
// let index = arr3.findIndex((a) => a === "Taib");
console.log(arr3);
let element = arr3.lastIndexOf(1)
console.log("last index of 1 is : " + element);
console.log("Index of taib is : " + index);


//clearing array
// arr3.length = 0;
arr3 = [];
console.log(arr3);

//concat
let ar = [1,2,3,4] , ar1 = [5,6,7,8];
let conactt_array = arr.concat(ar1);
console.log(conactt_array.join(" "));

//does array exist or not? under below
function isArr(arr)
{
    return arr instanceof Array;
}
console.log(isArr(arr));

