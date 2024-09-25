// you have to write property inside method, if you assign any kind property or mehod with this outside method it will show error
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    update(value) {
        this.name = value;
    }

    show() {
        console.log(this.name,this.age);
    }
}

// instance taib as object
let taib = new Person("taib",30);
console.log(taib);

taib.name = "Murtaza";
taib.age = 35;

console.log();
console.log(taib);
console.log(taib.name);

taib.update("Mustain");
console.log();
console.log(taib);

// delete Class
Person = null;

// delete instance
delete taib.name; 
delete taib.age;
delete taib.update;
delete taib.show;
