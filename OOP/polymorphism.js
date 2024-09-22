// polymorphism works with inheritance, override, overloading

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name,this.age);
    }
}

// inheritance
class Cricketer extends Person {
    #country;// private property
    constructor(name,age,type,country) {
        super(name,age);
        this.type = type;
        this.country = country;
    }

    // getter
    get getProperty() {
        return this.country;
    }

    // override and overloading
    show(p1,p2,p3) {
        console.log("Total arguments :",arguments.length);
        return this.getProperty;
    }
}

let tamim = new Cricketer("Tamim",50,"Batsman","Bangladesh");
console.log(tamim.show());

console.log();
console.log(tamim.show(1));

console.log();
console.log(tamim.show(1,2));

console.log();
console.log(tamim.show(1,2,3));
