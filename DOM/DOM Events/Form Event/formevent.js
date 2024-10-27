let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let checkbox = document.querySelectorAll(".check");
let form = document.querySelector("#form");
let image = document.querySelector("#image");

// <form id="form" enctype="multipart/form-data">
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
