//method 1: 
console.log("Global context rules for window , see it on browser console ",this);

// method 2:
let hiWindow = () => {
    // it is non strict mode
    console.log("Global context rules also work in function for window, see it on browser console",this);
}
hiWindow();

// method 3:
// we can prevent window printing from function
// using `use strict`
console.log();
hiWindow = () => {
    "use strict";
    console.log("using strict mode",this);
};
hiWindow();

// method 4:
// global variable print with this 

let hiName = () => {
    this.namee = "taib";
};
hiName();
console.log(this.namee);

// to prevent method 4 use object rules of "this"