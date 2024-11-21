let arr1 = [1, 2, 3];
let arr2 = arr1.slice(); // removing reference
arr2.push(5, 6);
console.log("Array1 :", arr1);
console.log("Array2 :", arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 }; // removing reference
obj2.c = 3;
console.log("Object1 :", obj1);
console.log("Object2 :", obj2);
