let object = {
  arr: [1, 2, 3, 4],
  name: "Taib",

  vanillaFunction: function () {

    // Warning don't use "vanila function" for callback and also "this keyword", if you use vainla it will asign global variable
    // use "arrow function" for callback and also "this keywords"
    this.arr.forEach((value) => {
        console.log(`${this.name} from ${value} miles`);
    })
  }
};

console.log(object.vanillaFunction());
