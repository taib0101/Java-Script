class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    notStatic() {
        console.log("this is not static method");
    }

    static thisStatic() {
        console.log("this is static method");
    }
}

let taib = new Person("Taib",50);

// non static concept, you can call method by object
taib.notStatic();

// static concept, you can call method by class
Person.thisStatic();