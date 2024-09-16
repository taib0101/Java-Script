// bind as like call and apply , but it is more useful
// apply() take only or double argument as like call()
// difference is call take second argument as value but apply take array as argument with sequentially
// like for [10,20,30] 

let karim = {
    namee : "Abdul Karim",
    age : 20,
    dob : 2000,
    nestedObject : {
        karimFunction : function(x,y) {
            console.log(this);
            console.log(x," ",y);
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

let changeRahimBykarim = karim.nestedObject.karimFunction.bind(rahim);
changeRahimBykarim(2028,"Bro are you okay!");
console.log(changeRahimBykarim);