// Destructuring syntax was introduced from es6
const user = { name: 'John Doe', age: 34 };
console.log("user: \n", user);
// es5 code
const myName = user.name;
const myAge = user.age;
console.log("myName: ", myName, " - myAge: ", myAge);
// es6 - destructuring syntax
const { name, age } = user;
console.log("name: ", name, " - age: ", age);

// Destructuring with new variables names
const { name: userName, age: userAge } = user;
console.log("userName: ", userName, " - userAge: ", userAge);

// Nested Object
const student = {
    johnDoe: {
        max: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
const { johnDoe: { max, email } } = student;
console.log("max: ", max, " - email: ", email);

const { johnDoe: { max: studentMax, email: studentEmail } } = student;
console.log("studentMax: ", studentMax, " - studentEmail: ", studentEmail);

// Use Destructuring Assignment to Assign Variables from Arrays
const [a, b, c, d] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d);
// Use commas to reach the desired index on an Array
const [e, f, , , g] = [1, 2, 3, 4, 5, 6];
console.log(e, f, g);

// Use destructuring assignment to swap the values of a and b
let m = 8, n = 6;
console.log(m, n);
[m, n] = [n, m];
console.log(m, n);

// Destructure object as function parameter (variables destructured are to use inside the function)
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    console.log(name, age, nationality, location);
}
// Destructure and send only some variables in the function
const printNationality = ({ name, nationality }) => {
    console.log(name, nationality);
};

const userProfile = {
    name: "Russel",
    age: 25,
    nationality: "congolese",
    location: "3, Momosas"
};
profileUpdate(userProfile);
printNationality(userProfile);