// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
    b = 5;
}

// before the function call
console.log("a: ", a);

//after the function call
greet();
console.log("a: ", a); // 3
console.log("b: ", b);

// Hoisting
c = 5;
console.log("c: ", c);
var c;
