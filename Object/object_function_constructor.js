// 4 rules of function constructor
// 1. create an empty object
// 2. function is called this for object variable
// 3. object is linked to the prototype
// 4. object will return automatically
// this ES5 version

// creating object with constructor function
let ConstructorFunction = function (namee,age,nested_object,array) {
    console.log(this); // print this with 
    this.namee = namee;
    this.age = age;
    this.nested_object = nested_object;
    this.array = array;
};

// when we give "new" it means it is object but without giving "new" it represent window after printing "this" keyword
const object1 = new ConstructorFunction("Taib",27,{nickName:"pothead",score:25},[10,20,30]); // it represent object
console.log("it represent object : ",object1);

const object2 = ConstructorFunction("Taib",27,{nickName:"pothead",score:25},[10,20,30]); // it represent window
console.log("it represent window : ",object2);