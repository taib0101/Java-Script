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

if(object.hasOwnProperty("namee"))
    console.log("namee is a property of this object");


//converting this object to array
let arr = Object.keys(object);//it take the keys of object and keep those in array's index
console.log("object keys are : ", arr);
console.log("Length of object keys : %d",arr.length);

//deleting a key of object
delete object["array"];
arr = Object.keys(object);
console.table(arr);
