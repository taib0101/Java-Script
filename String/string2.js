// JavaScript String Search
str1 = "Taib is string is";
index = str1.indexOf("is");
console.log(index);

//match()
matchh = str1.match("is");
console.log(matchh);
matchh = str1.match(/is/g);
console.log(matchh);

//includes
includ = str1.includes("string") // is there have word in string trrue or false
console.log(includ);

//startsWith
strats = str1.startsWith("Taib");
console.log(strats);
ends = str1.endsWith("string");
console.log(ends);

//Does str exist or not ? under below
//method 1
let str = "Taib is man";
console.log(typeof str === "string");

//method 2
function isString(strr)
{
    return strr instanceof String;
}
let strr = new String("Taib is a man"); // this method doesn't work for strr = "Taib is a man"
console.log(isString(strr));
