let Person = class {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name,this.age);
    }
};

Person = class {
    constructor(type,country) {
        this.type = type;
        this.country = country;
    }

    show() {
        console.log(this.type,this.country);
    }
}

let tamim = new Person("Batsman","Bangladesh");
tamim.show();