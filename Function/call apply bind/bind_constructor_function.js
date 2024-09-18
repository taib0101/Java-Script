let Person = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
    
    this.functionn = function(value1,value2) {
        console.log(value1);
        console.log(value2);
    }
};

let person1 = new Person("Murtaza","Taib");
let person2 = new Person("Nurul","Abser");

console.log("bind function with object");
person1.functionn.bind(person1);
person2.functionn.bind(person2);

console.log();
console.log("bind function with object and array");
let bind1 = person1.functionn.bind(person1);
bind1 = bind1("Value1",[1,2,3])
console.log(bind1);

let bind2 = person2.functionn.bind(person2);
bind2 = bind2("Value2",[4,5,6])
console.log(bind2);


console.log();
console.log("bind function with null and array");
person1.functionn.bind(null,[[1,2,3]]); 
person2.functionn.bind(null,[[4,5,6]]); 