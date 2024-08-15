// method 3
// return callback function

let arr = [10,20,-30,5,-40,50,60,-65,-70,80,75,85,-90];
let filterr = (array,callback) => {
    let new_array = [];
    array.forEach((value) => {
        if(callback(value)) new_array.push(value);
    });
    return new_array;
};

arr = filterr(arr, (x) => {
    return x >= 0;
});

console.log(arr.join(" "));
