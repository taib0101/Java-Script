//method 1

let functionn1 = (callback) => {
	if(callback) {
		console.log("This is callback function");
	} else {
		console.log("This is not callback function");
	}
};

functionn1( () => {
	console.log("anonymous function as argument");
});

functionn1();


console.log("-----------------------------------------------------");

let functionn2 = (callback) => {
	if(callback(10)) {
		console.log("This is callback function");
	} else {
		console.log("This is not callback function");
	}
};

functionn2( (value) => {
	console.log("anonymous function as argument");
	return 1;
});

// functionn2() this default call or overloading will not work because
// in anonymous function i set parameter for getting value from callback 
// argument


