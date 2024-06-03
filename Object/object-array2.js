//Method 2:
let obj = {
    Name : [],
    "Model" : 420,
    obj2 : {
        "Wheel" : [],
        Light : 4
    }
};
// let obj = {};
// if(!Array.isArray(obj["Name"]))
//     obj["Name"] = [];
console.log("Does index Roll array exist inside the key of Name ? ",Array.isArray(obj["Name"]["Roll"]));
console.log("Does obj2 exist ",obj.hasOwnProperty("obj2"));
console.log("Does Wheel exist under obj2",obj.obj2.hasOwnProperty("Wheel"));

obj.Name.push("Roll");
obj.Name["Roll"] = [];
console.log("obj.Name length is : ",obj.Name.length);
obj.Name["Roll"].push("Taib",20,"Charmy",30);
console.table(obj);

let arr = Object.keys(obj);
console.log("arr takes object's keys");
console.table(arr);
console.log("length of arr is : ",arr.length);

for(let i in arr)
{
    console.log(arr[i]);
    if(Array.isArray(obj[arr[i]]) == 1) // comparing this is array or not
    {
        console.log("Name key contains Array");
        let arr2 = obj[arr[i]];
        console.log("arr2 length : ",arr2.length);
        for(let j in arr2)
            console.log(j);
    }
    else if(Object.prototype.toString.call(obj[arr[i]]) == "[object Object]") //comparing this is object or not
    {
        console.log("%s this key is a object",arr[i]);
        let arr2 = Object.keys(obj[arr[i]])//took the key of obj2 under obj in to a array
        console.log("Under obj2");
        console.log(obj[arr[i]][arr2[1]]);
    }

}

let arr2 = [];
arr2.push(obj);
console.log(arr2);

delete obj["obj2"];
console.table(obj);

//Does obj exit true or false under below
function isObject(obj)
{
    return obj instanceof Object;
}
console.log(isObject(obj));
