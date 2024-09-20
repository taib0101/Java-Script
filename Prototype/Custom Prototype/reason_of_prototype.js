// method 1:
// let objectChild = {
//     firstName : "Murtaza",
//     lastName : "Taib",
//     play : function() {
//         console.log(this.firstName,this.lastName,"is playing");
//     },
//     eat : function() {
//         console.log(this.firstName,this.lastName,"is eating");
//     },
//     sleep : function() {
//         console.log(this.firstName,this.lastName,"is eating");
//     }
// }

// I made it for one object , if there have millions of object , i had to write that code like that
// Writing this type code is harmful for memory complexity and code complexity
// and this is not good practice 

// method 2:
let objectParent = {
    age : 32,
    play : function() {
        console.log(this.firstName,this.lastName,"is playing");
    },
    eat : function() {
        console.log(this.firstName,this.lastName,"is eating");
    },
    sleep : function() {
        console.log(this.firstName,this.lastName,"is sleeping");
    } 
}

// when child inherit property,method from parent , it use Object.create()
// inherited property , method don't store directly child,
// it store to child __proto__ as like Constructor Prototype
let objectChild = Object.create(objectParent); // child inherit from parent
console.log(objectChild);
console.log(objectChild.__proto__);

objectChild.firstName = "Murtaza";
objectChild.lastName = "Taib";
console.log(objectChild);

                                //         objectParent
                                // -------------------------
                                // |   function play()     |
                                // |   function eat()      |
                                // |   function sleep()    |<-----
                                // -------------------------     |
                                //                               |
                                //                               |
                                //                               |
                                //                               |
                                //                               |
                                //         objectChild           |
                                // -------------------------     |
                                // |    firstName          |     |
                                // |    lastName           |     |
                                // |   __proto__  ---------------|
                                // -------------------------
// using method Type of code is not better practice for modern JavaScript 
// There have cool method Custom Prototype, it create after creating Constructor Function
// That was the reason to use Constructor Function Prototype
