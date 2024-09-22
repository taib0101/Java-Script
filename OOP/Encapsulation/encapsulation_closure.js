const calculate = () => {
    let count = 0;

    return {
        increament : () => {
            count++;
        },
        decreament : () => {
            count--;
        },
        getCount : () => {
            return count; // it return to getCount
        }
    }; // it return as object
};

let objectFunction = calculate();

objectFunction.increament();
objectFunction.increament();
objectFunction.increament();
console.log(objectFunction.getCount());

objectFunction.decreament();
objectFunction.decreament();
console.log(objectFunction.getCount());
