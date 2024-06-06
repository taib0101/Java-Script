//normal function

//pass by reference
//method 1
function array(temp)
{
    temp[0] = 2; // this also point on same element in heap memory 
    temp.push(800,900); //temp.push means temp and arr pointed on same element
                       //in heap memory from stack memory.where temp and arr stay in stack memory  
    console.log("Before Function");//generating new array it does not point on same element
    temp = [10,20,30]; 
    console.log("temp as name arr is changed to -> ",temp);
}

let arr = new Array();
arr.push(1,2,3,4);
array(arr);
console.log("Out Function");
console.log(arr,"\n");


//for push
//                                          Heap
//          Stack                     ------------------------  
//    ------------------              |                      |
//    | temp  ---------|--------|     |                      |
//    | arr   ---------|--------|---->| [2,2,3,4,800,900]    |
//    ------------------              ------------------------
//                              
//   


// for generating new as temp = [10,20,30] , it will change the pointed position
//                                          Heap
//          Stack                     ----------------  
//    ------------------       |----->| [10,20,30]   |
//    | temp  ---------|--------      |              |
//    | arr   ---------|------------->| [1,2,3,4]    |
//    ------------------              ----------------
//                              
//                           
//this for same without function. if you assign let obj = {array : [1,2,3,4]}
//convert obj keys into array as arr1 . arr1 = Object.keys(obj);
//let arr2 = obj[arr1[0]]
//arr2.push(100)
// console.log("arr2 = ",arr2.join(" ")); //output : arr1 =  1 2 3 4 100
// console.log("obj[array] = ",obj["array"].join(" "));output : obj[array] =  1 2 3 4 100
//if you don't want this follow line 61-75

//method 1
function changeobj(obj) 
{
    obj = {"Car" : "BMW",Model : 100}; //if you don't understand swap line 44 , 45
    obj.Value += 2;
    obj["Name"] = "Boss";
    console.log("In function");
    console.log(obj);
}

let obj = {Value : 10,"Name" : "Taib"};
changeobj(obj)
console.log("Out function");
console.log(obj,"\n");

//method 2
function array1(arr1)
{
    let temp = new Array(arr1.length);
    // let temp = arr1; // if you use this , and push or pop temp,
    //arr1 will change simutaneously, but don't change simutaneously
    //follow line 57
    for(let i = 0; i < temp.length; ++i)
        temp[i] = arr1[i];
    temp.push(100);
    console.log("In function");
    console.log(temp);
}

let arr1 = new Array();
arr1.push(1,2,3,4);
array1(arr1);
console.log("Out Function");
console.log(arr1,"\n");

//pass by value
function fun_num(number)
{
    number = number * 10.289;
    console.log("In function");
    console.log(number);
}

let number = 10;
fun_num(number);
console.log("Out Function");
console.log(number);

//return value
function ret_num(number1)
{
    number1 = number1 * 10.289;
    return number1;
}

let number1 = ret_num(10);
console.log("\nReturn Function");
console.log(number1);