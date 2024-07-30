const image = document.querySelector("#image");

let load = (event) => {
    console.log("image loaded");
};

image.addEventListener("load" , load);

image.addEventListener("error" , (event) => {
    console.log("image loaded error");
});