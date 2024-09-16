let object = {
    namee : "Taib",
    age : 27,
    isBangladeshi : true,
    nested_object : {
        nickName : "pothead",
        amount : 25
    },
    array : [10,20,30,40],
    functionn : () => {
        console.log("object called here");
        return "object returned";
    }
};
console.log(object.functionn());