let person = function(value) {
    console.log(this.firstName,this.lastName);
    console.log(value);
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
person.call(person1);
person.call(person2);

console.log();
console.log("call function with object and argument");
person.call(person1,"Bro");
person.call(person2,"Man");

console.log();
console.log("call function with null and argument");
person.call(null,"ok");
person.call(null,"okay");