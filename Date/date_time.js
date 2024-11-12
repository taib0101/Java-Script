// Date with human Uneadable
const dateWithUnReadable = Date.now();
console.log(dateWithUnReadable);

// Date with human Readable
const dateWithReadable = new Date(Date.now());
console.log(dateWithReadable);

// Human Readable Locale Date And Time
// const localeDateAndTime = new Date(Date.now()).toLocaleString();
const localeDateAndTime = new Date(Date.now()).toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

// Human Readable Locale Date 
// const localeDate = new Date(Date.now()).toLocaleDateString();
const localeDate = new Date(Date.now()).toLocaleDateString("en-US", { timeZone: "Asia/Tokyo" });
console.log(localeDate);

// Human Readable Locale Time
const localeTime = new Date(Date.now()).toLocaleTimeString();
console.log(localeTime);