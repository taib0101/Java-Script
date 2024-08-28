let functionn1 = (callback) => {
	if(callback(10)) {
		return callback;
	}
};

let callback_returned = functionn1 ( (value) => {
	if(value === 10)
		return 1;
	return 0;
})

console.log("callback",callback_returned," has returned");
