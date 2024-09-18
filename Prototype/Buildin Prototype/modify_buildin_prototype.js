// build in prototype
// filter
// method 1
let arr = [1,2,3,4,5,6,7,8,9].filter(value => value%2 === 0);
console.log("even arr = ",arr);

// method 2
arr = [1,2,3,4,5,6,7,8,9,10].filter(value => {
    return value%2 === 1;
})
console.log("odd arr = ",arr);


// Constructor Function
Array.prototype.filter = function() {
    let array = [];

    this.forEach(value => console.log(value));

    for(let i = 0; i < this.length; ++i)
        if(this[i] % 2) array.push(this[i]);
    console.log();

    return array;
};

console.log([1,2,3,4,5,6,7].filter());