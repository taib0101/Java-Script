// when we use getter setter right?
// we use getter setter in ecapsulation for private property and method

// method 01:
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    // getter
    get getName() {
        return this.name;
    }

    get getNameByObject() {
        return {
            name: this.name,
            model: this.model
        };
    }

    // setter
    set setName(name) {
        this.name = name;
    }

    set setNameByObject(object) {
        this.name = object.name;
        this.model = object.model;
    }
}

// when you use getter, setter using get ,set ,you don't need to use like object.getName() and object.setName("xd")
// you have to use it like that object.getName and object.setName = "xd" or object.setNameByObject = {name:"xd",model:"xd"}
let bmw = new Car("BMW", "X");
bmw.setName = "BMM";
console.log("Method 01: ");
console.log(bmw.getName);

console.log();
bmw.setNameByObject = { name: "bmt", model: "dick" };
// bmw.setNameByObject = {name:"bmt",model:bmw.model};
let obj = bmw.getNameByObject;
console.log(obj);


// Note** -> setter is used for updating data after assign 


// method 02:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getByObject() {
        return {
            name: this.name,
            age: this.age,
            type: this.type,
            country: this.country
        };
    }

    set setByObject(object) {
        this.name = object.name;
        this.age = object.age;
        this.type = object.type;
        this.country = object.country;
    }
}

class Cricketer extends Person {
    constructor(name,age,type,country) {
        super(name,age);
        this.type = type;
        this.country = country;
    }

    show() {
        console.log("done");
    }
}

let tamim = new Cricketer("tamim",50,"batsman","bangudesh");
console.log();
console.log("Method 02 : ");
console.log(tamim);

// set here
tamim.setByObject = {
    name : "Iqbal",
    age : 40,
    type : "All Rounder",
    country : "Bangladesh"
}

// get here
obj = tamim.getByObject;
console.log();
console.log(obj);