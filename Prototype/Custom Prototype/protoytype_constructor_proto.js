let array = [];
console.log(array.__proto__ === Array.prototype);
console.log("Array.prototype :",array.__proto__);
console.log("Array.prototype :",Array.prototype);
console.log("Array Constructor Function :",array.__proto__.constructor);
console.log("Array Constructor Function :",Array.prototype.constructor);
console.log("Array Constructor Function -> Function.prototype :",array.__proto__.constructor.__proto__);
console.log("Array Constructor Function -> Function.prototype :",Array.prototype.constructor.__proto__);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype :",array.__proto__.constructor.__proto__.__proto__);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype :",Array.prototype.constructor.__proto__.__proto__);
console.log("Array Constructor Function -> Function.prototype -> Function Constructor :",array.__proto__.constructor.__proto__.constructor);
console.log("Array Constructor Function -> Function.prototype -> Function Constructor :",Array.prototype.constructor.__proto__.constructor);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype -> null :",array.__proto__.constructor.__proto__.__proto__.__proto__);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype -> null :",Array.prototype.constructor.__proto__.__proto__.__proto__);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype -> Object Constructor :",array.__proto__.constructor.__proto__.__proto__.constructor);
console.log("Array Constructor Function -> Function.prototype -> Object.prototype -> Object Constructor :",Array.prototype.constructor.__proto__.__proto__.constructor);

console.log();
let object = {};
console.log(object.__proto__ === Object.prototype);
console.log("Object.prototype :",object.__proto__);
console.log("Object.prototype :",Object.prototype);
console.log("Object.prototype -> Object Constructor :",object.__proto__.constructor);
console.log("Object.prototype -> Object Constructor :",Object.prototype.constructor);
console.log("Object.prototype -> Object Constructor -> Function.prototype :",object.__proto__.constructor.__proto__);
console.log("Object.prototype -> Object Constructor -> Function.prototype :",Object.prototype.constructor.__proto__);
console.log("Object.prototype -> Object Constructor -> Function.prototype -> Object.prototype :",object.__proto__.constructor.__proto__.__proto__);
console.log("Object.prototype -> Object Constructor -> Function.prototype -> Object.prototype:",Object.prototype.constructor.__proto__.__proto__);
console.log("Object.prototype -> Object Constructor -> Function.prototype -> Object.prototype -> null :",object.__proto__.constructor.__proto__.__proto__.__proto__);
console.log("Object.prototype -> Object Constructor -> Function.prototype -> Object.prototype -> null:",Object.prototype.constructor.__proto__.__proto__.__proto__);

console.log();
let Cat = function(name) {
    this.name = name;
};

let kitty = new Cat("kitty");
console.log(kitty.__proto__ === Cat.prototype);
console.log("Cat.prototype :",kitty.__proto__);
console.log("Cat.prototype :",Cat.prototype);
console.log("Cat.prototype -> Cat Constructor :",kitty.__proto__.constructor);
console.log("Cat.prototype -> Cat Constructor :",Cat.prototype.constructor);
console.log("Cat.prototype -> Cat Constructor -> Function.prototype :",kitty.__proto__.constructor.__proto__);
console.log("Cat.prototype -> Cat Constructor -> Function.prototype :",Cat.prototype.constructor.__proto__);
console.log("Cat.prototype -> Cat Constructor -> Function.prototype -> Object.prototype :",kitty.__proto__.constructor.__proto__.__proto__);
console.log("Cat.prototype -> Cat Constructor -> Function.prototype -> Object.prototype :",Cat.prototype.constructor.__proto__.__proto__);
console.log("Cat.prototype -> Function.prototype -> Object.prototype -> null :",kitty.__proto__.__proto__.__proto__);
console.log("Cat.prototype -> Function.prototype -> Cat Constructor -> Object.prototype -> null :",Cat.prototype.__proto__.__proto__);

// if you want to see diagram go to ./picture