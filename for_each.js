//forEach
let arr = ["Apple" , "Mango", "Cherry", "Jack"]
console.log(`${arr[0]}`);
//forEach((arrow_function) => {})
arr.forEach((numbers) => {
    console.log(numbers);
});

let obj = {Name : "Taib",Car : "BMW",array : [1,2,3,4]};
console.log();
arr = Object.keys(obj)
//direct object cant for iterate
arr.forEach((numbers) => {
    console.log(numbers,obj[numbers]);
})

let map = new Map();
map.set("name","Taib");
map.set("Roll",10);
map.forEach((numbers) => {
    console.log(numbers);
})

let str = "Taib is a man";
str = str.split("");//if you want print string character by using forEach method you need to use 
//spilt makes string to array
//join makes string ,this called typeof string
//split for sort, reverse
console.log("\nafter split");
console.log(str);
str.forEach((indexx) => {
    console.log(indexx);
});
str = str.join("");
str = str.slice(5,13);
str = str.split("i").join(" ");
console.log(str);

let products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];
products.forEach((product) => {
  product.price = 100;
});

console.log(products);
