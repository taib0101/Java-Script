let person =  function(value1,value2) {
        console.log(this.firstName,this.lastName);
        console.log(value1);
        console.log(value2);
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
person.bind(person1);
person.bind(person2);

console.log();
console.log("bind function with object and array");
let bind1 = person.bind(person1);
bind1 = bind1("Value1",[1,2,3])
console.log(bind1);

let bind2 = person.bind(person2);
bind2 = bind2("Value2",[4,5,6])
console.log(bind2);


console.log();
console.log("bind function with null and array");
person.bind(null,[[1,2,3]]); 
person.bind(null,[[4,5,6]]); 