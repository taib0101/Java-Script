// over ride means to change the same elements
let functionn = () => {
    console.log("not over ride done");
}

functionn = () => {
    console.log("over ride done");
}

console.log(functionn());

let object = {
    objFunction : () => {
        console.log("object function over ride not done");
    }
}

object.objFunction = () => {
    console.log("object function over ride done");
}

console.log();
console.log(object.objFunction());
