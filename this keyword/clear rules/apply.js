// apply() take only or double argument as like call()
// difference is call take second argument as value but apply take array as argument with sequentially
// like for [10,20,30] 

let karim = {
    namee : "Abdul Karim",
    age : 20,
    dob : 2000,
    nestedObject : {
        karimFunction : function(x,y,z) {
            console.log(this);
            console.log(x," ",y," ",z);
        }
    }
}

let rahim = {
    namee : "Abdul Karim",
    age : 25,
    dob : 1995,
    nestedObject : {
        rahimFunction : function(x,y,z) {
            console.log(this);
            console.log(array);
        }
    }
}

karim.nestedObject.karimFunction.apply(karim);
console.log();
karim.nestedObject.karimFunction.apply(karim,[10,20,30]);
console.log();
karim.nestedObject.karimFunction.apply(rahim);
console.log();
karim.nestedObject.karimFunction.apply(rahim,[40,50,60]);