let Person = function(name,age) {
    // parent
    this.name = name;
    this.age = age;
};

Person.prototype.position = function() {
    console.log(this.name,"position is",this.type);
}

// now make a Cricketer constructor function and inherit from Person constructor function
let Cricketer = function(name,age,type,country) {
    // child
    Person.call(this); // this is inherit process, if you don't use it will not work
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
};

Cricketer.prototype.play = function() {
    console.log(this.name,"is playing");
};

// now Cricket prototype will inherit Person prototype
Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer; // it will for over right , because in Cricketer Constructor function was written call,if you don't use inherit will not work

// creating object by child
let tamim = new Cricketer("Tamim",40,"Batsman","Bangudesh");
// calling function from parent function which is in Person prototype
tamim.position();



// Cricketer.prototype.__proto__ ------------> Person.prototype
// child = Object.create(parent)
// child.__proto__ ---> parent
// that means when a function not found , it search by child.__proto__, which is connected to Parent prototype
// if you dont understand go to ./picture
console.log(Cricketer.prototype.__proto__ === Person.prototype);
