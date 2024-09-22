// over ride means to change the same elements
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name,"is a man");
    }
}

class Stoner extends Person {
    constructor(name,age) {
        super(name,age);
        this.name = "Murtaza Taib"; // over ride
    }

    // over ride
    show(value) {
        console.log(this.name,`is a stoner, who smoke pot ${value} days in a month`);
    }
}

let taib = new Stoner("taib",50);
let override = taib.show(50);
console.log(override);