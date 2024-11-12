// Date with human Uneadable
const dateWithUnReadable = Date.now();
console.log(dateWithUnReadable);

// Date with human Readable
// const dateWithReadable = new Date(Date.now());
// after 1 hour time and date
const dateWithReadable = new Date(Date.now() + (1000 * 60 * 60));
console.log(dateWithReadable);

// Human Readable Locale Date And Time
// const localeDateAndTime = new Date(Date.now()).toLocaleString();
// const localeDateAndTime = new Date(Date.now()).toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
// after 1 hour time and date
const dateWithReadable = new Date(Date.now() + (1000 * 60 * 60)).toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

// Human Readable Locale Date 
// const localeDate = new Date(Date.now()).toLocaleDateString();
const localeDate = new Date(Date.now()).toLocaleDateString("en-US", { timeZone: "Asia/Tokyo" });
console.log(localeDate);

// Human Readable Locale Time
const localeTime = new Date(Date.now()).toLocaleTimeString();
console.log(localeTime);

// but JWT take expire time in differently in JSON payload , goto ExpressJs/JSON Web Token/expire.js
