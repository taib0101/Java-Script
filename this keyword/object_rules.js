// to prevent this type code below
// let hiName = () => {
//     this.namee = "taib";
// };
// hiName();
// console.log(this.namee);

let object = {
    namee : "taib",
    age : 25,
    array : [10,20,30],
    nested_object : {
        nickName : "pothead",
        score : 25
    },
    functionn : function () { // arrow function doesn't work here
        console.log("printing whole onject : ",this);
        console.log("namee : ",this.namee);
        console.log("nested object : ",this.nested_object);
        console.log("array : ",this.array);
        // function's are accepted also in nested object
    }
};

console.log(object.functionn());