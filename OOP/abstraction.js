// Abstraction makes the code simplicity
// In other programming language like C++ , JAVA 
// Abstraction keyword define that you can't make object or instance for parent
// you can make object or instance for child, which is inherited from parent
// but the thing is , there have no abstract keyword in javascript

// parent
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    parentMethod() {
        console.log("This is parent");
    }
}

// child
class Cricketer extends Person {
    constructor(name,age,type,country) {
        super(name,age);
        this.type = type;
        this.country = country;
    }

    childMethod() {
        console.log("This is Child");
        console.log("Name :",this.name);
        console.log("Age :",this.age);
        console.log("Type :",this.type);
        console.log("Country :",this.country);
    }
}

// we inherited Person(Parent) to Cricket(Child), called parent and child methods by child object or instance
let tamim = new Cricketer("Tamim",40,"Shitt","Bangudesh");
console.log(tamim);
console.log();
console.log(tamim.childMethod());
console.log();
console.log(tamim.parentMethod());