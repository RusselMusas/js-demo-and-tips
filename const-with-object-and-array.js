"use strict";
// Const variable are not mutables
const a = 6;
console.log("a: ", a);
// a = 4; // throws error
console.log("a: ", a);

// Const objects and arrays are still mutable
const s = [5, 6, 7];
console.log("s: ", s);
// s = [1, 2, 3];   // throws error
s[2] = 45;
console.log("s: ", s);

// Protect from mutation with .freeze
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
console.log(obj); 
Object.freeze(obj); console.log("Object freezed."); 
// obj.review = "bad";      // ignored in non strict mode or throw error in strict mode
// obj.newProp = "Test";    // ignored in non strict mode or throw error in strict modes
console.log(obj);