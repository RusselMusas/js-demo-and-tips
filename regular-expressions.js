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
console.log(result);