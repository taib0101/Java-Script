//is this function ? true or false
let check = (arrow_function1) => {
    return arrow_function1 instanceof Function;
}

console.log("Does arrow_function1 exists ? ",check(arrow_function1) ? "Yes" : "No");
