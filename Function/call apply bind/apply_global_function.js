let person = function(array) {
        console.log(this.firstName,this.lastName);
        console.log(array);
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
person.apply(person1);
person.apply(person2);

console.log();
console.log("apply function with object and array");
person.apply(person1,[[1,2,3]]); // Pass array as one argument
person.apply(person2,[[4,5,6]]); // Pass array as one argument

console.log();
console.log("apply function with null and array");
person.apply(null,[[1,2,3]]); // Pass array as one argument
person.apply(null,[[4,5,6]]); // Pass array as one argument