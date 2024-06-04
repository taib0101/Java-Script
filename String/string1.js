// let str1 = "madamimadam";
let str1 = new String("madamimadam");
let str2 = " is a string";

//length
let size1 = str1.length;
let size2 = str2.length;
console.log("sie of str1 : %d",size1);
console.log("sie of str2 : %d",size2);
console.log(str1);

//charAt(position)
let charr = str1.charAt(8);
// let charr = str1[10];
console.log(charr);

//slice(start,end) , substring(start,end) , substr(start,length)
let slice_str = str1.slice(4,7); //let slice_str = str1.slice(7); it means 7 to last-length
// let slice_str = str1.substring(4,7);
console.log(slice_str);
console.log(slice_str === "mim");
console.log("Taib".slice(0,3));

//string makes to uppercase
let up_str1 = str1.slice(4,7).toUpperCase();
console.log(up_str1);
up_str1 = up_str1.toLowerCase();
console.log(up_str1);

//concat()
let concatt = str1.concat(str2);
console.log(concatt);
concatt = str1 + "" + str2;
console.log(concatt);
concatt = "Taib".concat(" ",":","-",">",str2);
console.log(concatt);

//trim() - it removes white space
str1 = "   Hola Senora   ";
let trimm = str1.trim();
console.log(trimm)
trimm = str1.trimStart();//it removes white space front of string
console.log(trimm);
trimm = str1.trimEnd();
console.log(trimm);

//padStart(), padEnd()
let text = "5";
let padded = text.padStart(4,"0"); // it add four 0's front of string
console.log(padded);
padded = text.padEnd(4,"x");
console.log(padded);

let number = 5; // for padding a number it must convert to string
number = number.toString();
number = number.padStart(4,"0");
console.log(number);

//repeat(count)
text = "Taib is a string"
text = text.repeat(2);
console.log(text);

//replace()
text = "Taib is a string is is";
text = text.replace(/is/i,"was"); //it replace just one word of string
console.log(text);
text = text.replace(/is/g,"was"); //it replace all word of string
console.log(text);

//split() ,during spilt need to add join(" ") else it will show error ,because join for string 
//spilt for array
text = "Taib,is,a,string"
text = text.split(",").join(" ");
console.log(text);

//reverse
text = text.split("").reverse().join("");
console.log(text);

//sort
text = " bro its me , i am"
text = text.split("").sort().join("").trim().split(",").join("");
console.log(text);

if(typeof str1 == "string")
    console.log("This is string");

//clearing string 
str1 = "";
console.log("The length of string is : ",str1.length);
