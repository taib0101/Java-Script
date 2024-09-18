// calling function is called invoke
// every function in javascript are method as member function
// when you call function in global, that means it contains in window object
// if a function is not a object method or member function , that means it is a global method

let functionn = () => {
    console.log("functionn invoked like that");
};

// we can invoke or call function like this
functionn();

let object = {
    namee : "taib",
    functionn1 : function() {
        console.log("calling \"this\" in function");
        console.log(this);
        console.log(this.namee);
    },
    functionn2 : () => {
        console.log("you can't assign \"this\" in arrow function");
    }
}

// we can invoke function by a object
console.log(object);
console.log();
console.log(object.functionn1());
console.log();
console.log(object.functionn2());

let Constructor = function(namee,age) {
    this.namee = namee;
    this.age = age;
}

// we can invoke a function by a constructor
let object1 = new Constructor("Taib",25);
console.log();
console.log(object1);