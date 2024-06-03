//Method 1:
// let obj = {};
let obj = new Object();
// let obj = {
//     "Name" : [],
//     "Data" : [],
//     "I'd" : 3.12
// };

if(!obj.hasOwnProperty("Data"))
    obj["Data"] = [];
obj["Data"].push(20);
obj["Data"].push(10,30);
obj["I'd"] = 3.12;
console.log(Array.isArray(obj["I'd"]));

if(!Array.isArray(obj["Name"])) // if(!Array.isArray(obj.Name))
    obj["Name"] = [];
obj["Name"].push("Taib");
obj["Name"].push("Galib");
obj["Name"][1] = "Alib"
console.table(obj);
console.log(obj["Name"][1])
console.log(obj["Name"].find((value) => value === "Tai"));// output : undefined
console.log("found the value is : " + obj["Name"].findIndex((value) => value === "Taib"));
console.log("found the value is : " + obj["Name"].find((value) => value === "Taib"));


//converting this object to array
let arr = Object.keys(obj);//it take the keys of object and keep those in array's index
console.log("Length of object keys : %d",arr.length);
console.log("Index of name object \"Date\" is : ", arr.findIndex((a) => a === "Data"));
console.log("Index of name object \"Date\" is : ", arr.indexOf("Data"));
console.log("is the key of name \"Date\" does exist ? ", arr.find((a) => a === "Data"));

console.log("Index of name object \"Date\" is : ", obj[arr.find((a) => a === "Data")].findIndex((a) => a === 30));
console.log("is the key of name \"Date\" does exist ? ", obj[arr.find((a) => a === "Data")].find((a) => a === 20));

let size = arr.length;
for(let i in arr)
{
    console.log(i + " : " + arr[i]);
    let arr2 = obj[arr[i]]
    console.log("the length of arr[%s] is %d",arr[i],obj[arr[i]].length);
    for(let j in arr2)
        console.log(arr2[j]);
}

for(let i = 0; i < size; ++i)
{
    console.log(i + " : " + arr[i]);
    let arr2 = obj[arr[i]]
    console.log("the length of arr[%s] is %d",arr[i],obj[arr[i]].length);
    for(let j = 0; j < arr2.length; ++j)
        console.log(arr2[j]);
}

//deleting a key of object
delete obj["Data"];
arr = Object.keys(obj);
console.table(obj.Name);
console.table(arr);
