// function sayMyName(fName, mName, lName) {       //=>    fname, mName, lName are c/d parameters
//     return `Your initials are: ${fName[0]}${mName[0]}${lName[0]}`
// }
// console.log(sayMyName("Bilal", "Ahmed", "Sheikh"))      //=>    here fname, mName, lName are c/d arguments


//      REST OPERATOR
function calculatePrice(...val){        //=> this ... is rest operator. this will take any number of arguments and return them in an array
    return val
}
// console.log(calculatePrice(200, 300, 520))

//         HANDLING OBJECTS
function handleObj(obj) {
    console.log(`hi ${obj.username}, your age is: ${obj.age}`);
}
// handleObj({
//     username: "Bilal",
//     age: 19
// });

//      HANDLING ARRAYS
function giveSecondValue(yourArray) {
    return yourArray[1]
}
// console.log(giveSecondValue([200, 320, 450]));

//  if a function is defined with the following syntax, you cannot call it before declaring it
const addTwo = function(num) {
    return num + 2
}
// addTwo(8)


//  if a function is defined with the following syntax, you can call it before declaring it
// addOne(2)
function addOne(num) {
    return num + 1
}