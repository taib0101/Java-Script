// over loading means loading one or more parameter in same function in OOP
// different language(c++,java) over loading support like this
/*
    class Person {
        show() {}
        show(p1,p2) {}
        show(p1,p2) {}
    }

*/

// but javascript overload concept is yo can load parameter multiple times in single method or function by calling one time

class Person {
    // for over loading take highest parameter and call by argument less or equal
    show(p1,p2,p3) {
        if(arguments.length === 1)
            console.log("parameter sended 1");
        else if(arguments.length === 2) 
            console.log("parameter sended 2");
        else if(arguments.length === 3)
            console.log("parameter sended 3");
    }
}

let taib = new Person();
taib.show(1);
taib.show(1,2);
taib.show(1,2,3);
