// Spread operator
let arr1 = [1,2,3];
let arr3 = [6,7,8];
let arr2 = [...arr1,4,5,...arr3];

console.log("arr1", arr1);
console.log("arr2", arr2);

let object1 = {
    firstname: "Russel",
    lastname: "Muamba Musasa",
    age: 15
};
console.log("object1", object1);
let object2 = {
    company: "Rawbank",
    role: "SWD"
};
console.log("object2", object2);
let object3 = {
    ...object1, ...object2
};
console.log("object3", object3);

// Destroy object property
object3.fullname = `${object3.firstname} ${object3.lastname}`;
delete object3.firstname;
delete object3.lastname;
console.log("object3", object3);

// check property
function checkObject(myObject, myProperty) {
    return myObject.hasOwnProperty(myProperty) ? myObject[myProperty] : "Property Not Found";
}
console.log("In object3 find property firstname and return value: ", checkObject(object3, "firstname"));
console.log("In object3 find property fullname and return value: ", checkObject(object3, "fullname"));
