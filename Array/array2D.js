//Method 1: Array Literal ,creating with push
let arr = [];
arr.push([]);
arr[0].push(128);
arr[0].push(32);
arr[0].push(64);

arr.push([]);
arr[1].push(64);
arr[1].push(32);
arr[1].push(16);

arr.push([]);
arr[2].push(256);
arr[2].push(64);
arr[2].push(32);

for(let i = 0; i < arr.length; ++i)
{
    arr[i].sort((a,b) => a - b);
    console.log(arr[i].join(" "));
    console.table(arr[i]);
}
console.log(arr[0]);
console.log("total row of 2D array : "+arr.length);

let rows = 3;
let columns = 3;
// Method 2:  Initializing with Zeros
let arr1 = []
for(let i = 0; i < rows; ++i)
{
    arr1[i] = [];
    for(let j = 0; j < columns; ++j)
        arr1[i][j] = 0;
    console.table(arr1[i]);
    console.log(arr1[i]);
}
console.log(arr1);

// Method 3: Array Constructor
let arr2 = new Array(rows);
let size = arr2.length
for(let i = 0; i < size; ++i)
    arr2[i] = new Array(columns).fill(-1),console.log(arr2[i]);
console.table(arr2);

// Method 4: using array form
let arr3 = Array.from({length: rows} , () => Array(columns).fill(0));
arr3[0].push(1);
arr3[0][2] = 100;
for(let i = 0; i < arr3.length; ++i)
    console.log(arr3[i].join(","));
console.log(arr3.length);
console.table(arr3);

//finding index of array element
console.log("changing");
let index = arr3[0].indexOf(100);
// let index = arr3.findIndex((a) => a === "Taib");
console.log(arr3);
let element = arr3[0].lastIndexOf(0)
console.log("last index of 0 is : " + element);
console.log("Index of 100 is : " + index);

size = arr3.length
for(let i = 0; i < size; ++i)
{
    for(let j = 0; j < arr3[i].length; ++j)
        console.log(arr3[i][j]);
}
console.log("size of arr3 is : "+size);

for(let i in arr3)
{
    for(let j in arr3[i])
        console.log(arr3[i][j]);
}

//clearing array
arr3 = [];
console.log("Empty array = ",arr3);