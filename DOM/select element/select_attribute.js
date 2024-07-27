// select by attribute
// method 1:
// document.querySelector('[aria-label = "bro"]');
const querySelector4 = document.querySelector('[class = "parent"]');
console.log("document.querySelector('[class = \"parent\"]')");
console.log(querySelector4);
console.log("querySelector4.childNodes",querySelector4.childNodes);


// method 2:
// document.querySelectorAll('[aria-label = "bro"],[aria-label = "taib"]');
const querySelectorAll4 = document.querySelectorAll("[class = \"container-fluid\"],[class = \"row\"]");
console.log("document.querySelectorAll(\"[class = \"container-fluid\"],[class = \"row\"]\")");
console.log(querySelectorAll4);//doesn't need to use loop to see queries