// call function, it takes single argument 
// let person = {
//     functionn : function(value1) {
//         console.log(this.firstName,this.lastName);
//         console.log(value1);
//     }
// };

// let person1 = {
//     firstName : "Murtaza",
//     lastName  : "Taib"
// };

// let person2 = {
//     firstName : "Nurul",
//     lastName  : "Abser"
// };

// console.log("call function with object");
// person.functionn.call(person1);
// person.functionn.call(person2);

// console.log();
// console.log("call function with object and argument");
// person.functionn.call(person1,"Bro");
// person.functionn.call(person2,"Man");

// console.log();
// console.log("call function with null and argument");
// person.functionn.call(null,"ok");
// person.functionn.call(null,"okay");

// apply function,it takes array as argument
// let person = {
//     functionn : function(array) {
//         console.log(this.firstName,this.lastName);
//         console.log(array);
//     }
// };

// let person1 = {
//     firstName : "Murtaza",
//     lastName  : "Taib"
// };

// let person2 = {
//     firstName : "Nurul",
//     lastName  : "Abser"
// };

// console.log("apply function with object");
// person.functionn.apply(person1);
// person.functionn.apply(person2);

// console.log();
// console.log("apply function with object and array");
// person.functionn.apply(person1,[[1,2,3]]); // Pass array as one argument
// person.functionn.apply(person2,[[4,5,6]]); // Pass array as one argument

// console.log();
// console.log("apply function with null and array");
// person.functionn.apply(null,[[1,2,3]]); // Pass array as one argument
// person.functionn.apply(null,[[4,5,6]]); // Pass array as one argument

// bind function, it takes multiple arguments, you can take argumet after
// let person = {
//     functionn : function(value1,value2) {
//         console.log(this.firstName,this.lastName);
//         console.log(value1);
//         console.log(value2);
//     }
// };

// let person1 = {
//     firstName : "Murtaza",
//     lastName  : "Taib"
// };

// let person2 = {
//     firstName : "Nurul",
//     lastName  : "Abser"
// };

// console.log("bind function with object");
// person.functionn.bind(person1);
// person.functionn.bind(person2);

// console.log();
// console.log("bind function with object and array");
// let bind1 = person.functionn.bind(person1);
// bind1 = bind1("Value1",[1,2,3])
// console.log(bind1);

// let bind2 = person.functionn.bind(person2);
// bind2 = bind2("Value2",[4,5,6])
// console.log(bind2);


// console.log();
// console.log("bind function with null and array");
// person.functionn.bind(null,[[1,2,3]]); 
// person.functionn.bind(null,[[4,5,6]]); 