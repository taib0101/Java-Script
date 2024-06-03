//Map
let map = new Map();
let obj = {"Group" : 2,"I'd" : 1819003};
let map2 = new Map();

//set
map2.set("Car","BMW");
map2.set("Tank","Leopard");
map.set("Array",[1,2,3]);
map.set("Object",obj);
map.set("String","Taib");
map.set("Number",10);
map.set("Map2",map2);

//get
let arr = map.get("Array");
console.table(map.get("Map2"));
console.log(map.get("Map2").get("Car"));
console.log("array in map : ",map.get("Array").join(" "));
console.log("Object : ",map.get("Object"))
console.log(map.get(obj));

//has
console.log("\"Array\" is ",map.has("Array")); //Output : true

for(let [keyy , valuee] of map)
    console.table(`${keyy} , ${valuee}`);

//deleting Map2
if(map.has("Map2"))
    map.delete("Map2");

//size
let sizee = map.size;

//converting it to array for iterating
let arr1 = Array.from(map);

console.log(map.size);
for(let i = 0; i < sizee; ++i)
{
    [keys , values] = arr1[i];
    console.log(`${keys} , ${values}`);
    console.log("another");
    console.log(keys,values);
}
//map -> set , get, has, clear, delete,keys
console.log(map.keys()); // showing all map keys
console.log(map.values()); // showing all map values

//isMap
function isMap(map)
{
    return map instanceof Map;
}
console.log("Does map exist?"+isMap(map));

//clear map
map.clear();
console.log(map.size);