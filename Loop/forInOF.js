let arr = [1,2,3,4]

// arr[0] = 1,arr[1] = 2, arr[2] = 3
for(let index in arr) {
  console.log(index);
}

for(let value of arr) {
  console.log(value);
}


let object = {
    name : "Taib",
    age : 30
};

console.log();
for(let key in object) {
    console.log(key);
}

for(let [key,value] of Object.entries(object)) {
    console.log(key,value);
}
