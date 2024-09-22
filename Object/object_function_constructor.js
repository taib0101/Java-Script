// 4 rules of function constructor
// 1. create an empty object
// 2. function is called this for object variable
// 3. object is linked to the prototype
// 4. object will return automatically
// it is ES5 version

// creating object with constructor function
let ConstructorFunction = function (namee,age,nested_object,array) {
    this.namee = namee;
    this.age = age;
    this.nested_object = nested_object;
    this.array = array;
    //console.log(this);

    this.function = function() {
        console.log();
        console.log("called this.function");
        //console.log(this);
    }
    
    this.arrow = () => {
    	console.log("This is arrow, but \"this keyword\" doesnt work in arrow function");
    }
};

// when we give "new" it means it is object but without giving "new" it represent window after printing "this" keyword
// new "this keyword rules"
const object1 = new ConstructorFunction("Taib",27,{nickName:"pothead",score:25},[10,20,30]); 
console.log("it represent object :",object1.function());

console.log();

console.log(object1.arrow());
// global context "this keyword" rules
//const object2 = ConstructorFunction("Taib",27,{nickName:"pothead",score:25},[10,20,30]);  
//console.log("it represent window : ",object2);

// to see more details go to this keyword/ directory
