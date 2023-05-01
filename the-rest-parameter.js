//  With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.
const sum = (...args) => {
    // const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum(1,5,6,3,2));
console.log(sum(0,6,2));