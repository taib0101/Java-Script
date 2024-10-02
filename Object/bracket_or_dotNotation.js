let object = {
    name : "Taib",
    age : 30,
    functionn : () => {
        console.log("Bracket or dot notation");
    }
}

let x = "functionn";
let y = "name";
let z = "age";

// rules is when you assign object key in a variable like "x", you can't call them like that object.x
// you have call them object[x]; // because x is a variable

// but you can call them as there key name like "object["name"] or object.name"

console.log(object[y]);
console.log(object["name"]);
console.log(object.name);

object[x]();
// or
object["functionn"]();
// or
object.functionn();
