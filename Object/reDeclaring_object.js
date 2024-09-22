// over ride means to change the same elements
let object = {
    name : "Taib",
    age : 40,
    show : function() {
        console.log(this.name,this.age);
    }
};

console.log(object.show());

// over ride
object = {
    name : "Murtaza Taib",
    age : 0,
    show : () => {
        console.log("over ride done in object, \"this\" keyword doesn't work in arrow function");
    }
}

console.log();
console.log(object.show());
