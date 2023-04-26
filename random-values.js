// Generate random value between 0 and 1;
let random_decimal = Math.random();
console.log("Random value1: " + random_decimal);

// Generate Random Decimal value between 0 and 10
random_decimal = Math.random() * 10;
console.log("Random value2: " + random_decimal);

// Generate Random Whole value between 0 and 10
random_decimal = Math.floor(Math.random() * 10);
console.log("Random value3: " + random_decimal);

// Generate Random Whole value between min and max
let min = 10; // inclusive
let max = 20; // exclusive
random_decimal = Math.floor(Math.random() * (max - min)) + min;
console.log("Random value4: " + random_decimal);

// Generate Random Whole value between min and max
min = 10; // inclusive
max = 20; // inclusive
random_decimal = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random value5: " + random_decimal);
