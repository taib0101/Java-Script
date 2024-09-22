// method 01
// class Person {
//     #sex; // that means this property is private , hash(#) represent private
//     constructor(name,age,sex) {
//         this.name = name;
//         this.age = age;
//         this.#sex = sex;
//     }

//     // this privateFunction doesn't work in node
//     // but it works in browser console
//     #privateFunction() {
//         console.log(this.#sex);
//     }

//     publicFunction() {
//         this.#privateFunction();
//         console.log(this.#sex); 
//     }
// }

// let taib = new Person("Taib",30,"male");

// taib.publicFunction();

// method 02
class Car {
    #id;// that mean id is private  
    constructor(name,model,id) {
        this.name = name;
        this.model = model;
        this.#id = id;
    }

    get getFunction(){
        return this.#id;
    }

    set setID(id) {
        this.#id = id;
    }

    show() {
        return this.getFunction;
    }
}

let bmw = new Car("BMW","X",123);
console.log(bmw);
console.log("public property");
console.log("name :",bmw.name);
console.log("model :",bmw.model);

console.log();
console.log("private property");
console.log(bmw.show());