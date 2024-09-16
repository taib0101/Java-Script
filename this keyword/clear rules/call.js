// to apply clear rules you have to know call().
// call method takes single argument as function , double argument as function, value
// call(function) or call(function,value)
let karim = {
    namee : "Abdul Karim",
    age : 20,
    dob : 2000, //date of birth
    nestedObject : {
        karimFunctionn : function(value) {
            console.log("this : ",this);
            console.log("value : ",value);
        }
    }
};

let rahim = {
    namee :  "Abdul Rahim",
    age : 25,
    dob : 1995,
    nestedObject : {
        rahimFunctionn : function(value){
            console.log("I am from abdul rahim");
        }
    }

}

karim.nestedObject.karimFunctionn.call(karim);
console.log();
karim.nestedObject.karimFunctionn.call(karim,2018);
console.log();
karim.nestedObject.karimFunctionn.call(rahim);
console.log();
karim.nestedObject.karimFunctionn.call(rahim,2010);

