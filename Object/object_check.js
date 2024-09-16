let object = new Object();

object.namee = "Taib";
object.age = 27;
object.nested_object = {
    nickName: "pothead",
    amount: 25
};
object.array = [10, 20, 30, 40];
object.functionn = () => {
    console.log("object called here");
    return "object returned";
};

console.log(object.functionn());
console.log("array in object exist? ",Array.isArray(object.array));

//Does obj exit true or false under below
let isObject = (obj) => {
    return obj instanceof Object;
};
console.log(isObject(object));
