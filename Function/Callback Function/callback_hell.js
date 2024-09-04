let takeOrder = (callback) => {
    setTimeout(() => {
        console.log("Took an order in asynchronous way");
        callback();
    } , 1000);
};

let processOrder = (callback) => {
    setTimeout(() => {
        console.log("processing order in asynchronous way");
        callback();
    }, 1000);
};

let deliverOrder = (callback) => {
    setTimeout(() => {
        console.log("deliver order in asynchronous way");
        callback();
    }, 1000);
};

let reportOrder = (callback) => {
    setTimeout(() => {
        console.log("report order in asynchronous way");
        callback();
    }, 1000);
};

// callback hell
// prevent callback hell using promises asynchronous
takeOrder(() => {
    console.log("callback hell 1\n");
    processOrder(() => {
        console.log("callback hell 2\n");
        deliverOrder(() => {
            console.log("callback hell 3\n");
            reportOrder(() => {
                console.log("callback hell done");
            });       
        });
    });
});
