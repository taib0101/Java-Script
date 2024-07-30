// const scrollHeight = document.querySelector("body").scrollHeight;
const scrollHeight = document.documentElement.scrollHeight;
const innerHeight = window.innerHeight;
const scrollAble = scrollHeight - innerHeight;
console.log("scrollAble = scrollHeight - innerHeight");
console.log(`${scrollAble} = ${scrollHeight} - ${innerHeight}`);

// 1:---->
// window.addEventListener("scroll" , (event) => {
//     console.log("scrolling....");
//     const scrolled = window.scrollY;
//     console.log("scrolled = ",scrolled);
// });

// 2:---->
window.addEventListener("scroll" , (event) => {
    // console.log(event);
        const scrolled = window.scrollY;
        console.log("scrolled = ",scrolled);
    if(window.pageYOffset > 400) {
        console.log("Over 400px....");
    } else {
        console.log("under 400px....");
    }
});