let person = {
    functionn : function(value1) {
        console.log(this.firstName,this.lastName);
        console.log(value1);
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

console.log("call function with object");
person.functionn.call(person1);
person.functionn.call(person2);

console.log();
console.log("call function with object and argument");
person.functionn.call(person1,"Bro");
person.functionn.call(person2,"Man");

console.log();
console.log("call function with null and argument");
person.functionn.call(null,"ok");
person.functionn.call(null,"okay");