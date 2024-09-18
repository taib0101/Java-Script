let Person = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(this);
    
    this.functionn = function(value) {
        console.log(value);
    }
};

let person1 = new Person("Murtaza","Taib");
let person2 = new Person("Nurul","Abser");

console.log("call function with object");
person1.functionn.apply(person1);
person2.functionn.apply(person2);

console.log();
console.log("call function with object and argument");
person1.functionn.apply(person1,[[1,2,3]]);
person2.functionn.apply(person2,[[4,5,6]]);

console.log();
console.log("call function with null and argument");
person1.functionn.apply(null,[[1,2,3]]);
person2.functionn.apply(null,[[4,5,6]]);