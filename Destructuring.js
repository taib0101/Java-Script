// Destructuring 
let array = ["Taib", "Ifty", "Tajin", ["Man", "Human"],["Somker","Stoner"]];
let [name1,name2,name3,[v1,v2],name4] = array;
console.log(name1);
console.log(name4);
console.log(v1,v2);


let object = {
    name : "Taib",
    age : 30
}
let { name } = object;
let { age } = object;
// let { name, age } = object

// giving object property new name
let { name:newName , age:newAge } = object;

console.log();
console.log(age);
console.log(newName);
