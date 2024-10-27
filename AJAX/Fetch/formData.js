let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let checkbox = document.querySelectorAll(".check");
let form = document.querySelector("#form");
let image = document.querySelector("#image");
let bodyObject = {};

// style
firstName.style.borderColor = "red";

const postFetch = async (formData) => {
    try {
        let url = "http://127.0.0.1:3001/info";
        await fetch(url, {
            method: "POST",
            body: formData
        });
        // let data = await response.text();
        // console.log(data);

        
        window.location = "/info";
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(checkbox);
    let filterCheckBox = []

    checkbox.forEach(value => {
        if (value.checked) filterCheckBox.push(value.value);
        // console.log(value.value);
    });

    let formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("vehicles", filterCheckBox);
    formData.append("image", image.files[0]);

    console.log(formData);
    console.log(image);
    postFetch(formData);

    // to reset the elements
    form.reset();
});
