// Regular expressions samples
// Note Literal match is case sensitive
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Find if myString contains the String "Hello"
console.log(myString);
console.log('Does sentence above contain "Hello"?', result);

// Match a Literal String with Different Possibilities 
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
result = petRegex.test(petString);
console.log(petString);
console.log('Does sentence above contain "dog" or "cat" or "bird" or "fish"?', result);

// Ignore Case While Matching with flag i
myString = "freeCodeCamp";
let fccRegex = /FREE/i; // Change this line
result = fccRegex.test(myString);
console.log(myString);
console.log('Does sentence above contain "FREE" with any case?', result);

// Extract Matches with .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
result = extractStr.match(codingRegex); // Change this line
console.log(extractStr);
console.log(result);

