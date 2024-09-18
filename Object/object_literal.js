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
    },

    thisFunction : function() {
        console.log(this);
        console.log(this.namee);
    }
};
console.log(object.functionn());
console.log();
console.log(object.thisFunction());