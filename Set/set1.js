//Set
let set = new Set();
set.add("Taib");
set.add(10);
set.add([]);
console.table(set);

//size of set
let sizee = set.size;
console.log("Size = ",set.size);

//converting set to array
let arr = Array.from(set);
arr[2].push(3,2,10);
console.log(arr);
console.table(arr[2]);
console.log(set);

for(let i of set)
{
    console.log(i);
}

console.log("\nloop another");
for(let i = 0; i < set.size; ++i)
{
    console.log(arr[i]);
}

//deleting Taib of set
set.delete("Taib");
console.log(arr.indexOf("Taib"));
console.log(arr.findIndex((a) => a == "Taib"));

arr = [];

//Does set exist ? See Uner Below
function sett (set) 
{
    return set instanceof Set;
}
console.log("set exist : ",sett(set));

set.clear();
console.log(set.size);