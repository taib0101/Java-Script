let person = {
    functionn : function(array) {
        console.log(this.firstName,this.lastName);
        console.log(array);
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

console.log("apply function with object");
person.functionn.apply(person1);
person.functionn.apply(person2);

console.log();
console.log("apply function with object and array");
person.functionn.apply(person1,[[1,2,3]]); // Pass array as one argument
person.functionn.apply(person2,[[4,5,6]]); // Pass array as one argument

console.log();
console.log("apply function with null and array");
person.functionn.apply(null,[[1,2,3]]); // Pass array as one argument
person.functionn.apply(null,[[4,5,6]]); // Pass array as one argument