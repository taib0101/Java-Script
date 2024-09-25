// Object.entires()
let object = {
    name : "Taib",
    age : {
        name : "Taib",
        age  : 30 
    }
};

// console.log(Object.entries(object));
for(let [key,value] of Object.entries(object)) {
    console.log(key,value);
}
