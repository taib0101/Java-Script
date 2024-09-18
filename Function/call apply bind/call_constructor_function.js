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
person1.functionn.call(person1);
person2.functionn.call(person2);

console.log();
console.log("call function with object and argument");
person1.functionn.call(person1,"Bro");
person2.functionn.call(person2,"Man");

console.log();
console.log("call function with null and argument");
person1.functionn.call(null,"ok");
person2.functionn.call(null,"okay");