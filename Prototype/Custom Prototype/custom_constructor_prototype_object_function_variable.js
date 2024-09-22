// if you don't know why use Prototype got to this file reason_of_prototype.js

let ConstructorFunction = function(name,age) {
    this.name = name;
    this.age = age;

    // it doesn't reduce memory 
    this.smoke = function() {
        console.log(this.name,"is smoking marijuana");
    }
};

// it reduce memory
ConstructorFunction.prototype = {
    play : function() {
        console.log(this.name,"is playing");
    },
    eat : function() {
        console.log(this.name,"is eating");
    },
    sleep : function() {
        console.log(this.name,"is sleeping");
    }
}

ConstructorFunction.prototype.function = function() {
    console.log("This function is from Constructor Function");
};

ConstructorFunction.prototype.age = 50;

let object1 = new ConstructorFunction("Murtaza",30);
let object2 = new ConstructorFunction("Nurul",30);

console.log("Showing Only Object");
console.log(object1);
console.log(object2);

console.log();
console.log(object1.eat());
console.log(object2.sleep());
console.log(object1.smoke());

console.log();
console.log(object1.function());
console.log(object2.function());

console.log();
console.log(object1.age);
console.log(object2.age);
