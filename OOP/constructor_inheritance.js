class Person {
    // parent
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    // prototypes at backend

    // this method works as prototype at backend
    position() {
        console.log(this.name," position is",this.type);
        console.log("Conutry :",this.country);
    }

    array(array) {
        this.array = array;
        console.log(this.array);
    }

    object(object) {
        this.object = object;
    }
}

// this extends concept act like, Cricketer prototype object inherit from Person prototype object
// at backend : Cricketer.prototype = Object.create(Person.prototype) and 
// Cricketer.prototype.constructor = Cricket, it means it over write the Person.call(this) at backend for super(name,age) 
class Cricketer extends Person{
    // child
    constructor(name,age,type,country) {
        super(name,age); // Person.call(this) play role at backend, for super(name,age).name,age inherited from Person class
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {
        console.log(this.name,"is playing");
    }
}

let tamim = new Cricketer("tamim",30,"batsman","Bangudesh"); // creating at child class
tamim.position(); // accessing function from parent 
// all of this done for inheritance 

tamim.array([4,6,4,6]);
tamim.play();

// if you don't understand how constructor , prototype, inheritance at backend 
// go to ./Prototype/Custome Prototype directory , for better understand