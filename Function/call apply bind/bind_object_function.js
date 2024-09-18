let person = {
    functionn : function(value1,value2) {
        console.log(this.firstName,this.lastName);
        console.log(value1);
        console.log(value2);
    }
};

let person1 = {
    firstName : "Murtaza",
    lastName  : "Taib"
};

let person2 = {
    firstName : "Nurul",
    lastName  : "Abser"
};

console.log("bind function with object");
person.functionn.bind(person1);
person.functionn.bind(person2);

console.log();
console.log("bind function with object and array");
let bind1 = person.functionn.bind(person1);
bind1 = bind1("Value1",[1,2,3])
console.log(bind1);

let bind2 = person.functionn.bind(person2);
bind2 = bind2("Value2",[4,5,6])
console.log(bind2);


console.log();
console.log("bind function with null and array");
person.functionn.bind(null,[[1,2,3]]); 
person.functionn.bind(null,[[4,5,6]]); 