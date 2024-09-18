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
object.thisFunction = function() {
    console.log(this);
    console.log(this.namee);
};

console.log(object.functionn());
console.log();
console.log(object.thisFunction());