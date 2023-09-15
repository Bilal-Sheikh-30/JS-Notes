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

//  "this" is a keyword used for referencing. It can refer keys in objects. it returns undefined when used inside a function.

//      ARROW FUNCTIONS

//declaration:
const addNum = (num1, num2) => {
    return num1 + num2
}

//     IMPLICIT RETURN
const product = (num1, num2) => num1 * num2     // num1 * num2 can also be enclosed between parenthesis

//      IMMEDIATELY INVOKED FUNCTION EXPRESSION
//  they are used to invoke a function immediately. sometimes there is a lot of mess of variables in global space so to prevent a function from that mess, we use IIFE

//  named iife:
(function something(){
    console.log(`something executed`);
})();       //=>    use ; b/w two consecutive IIFE to avoid error

//  unnamed / simple iife
// (   (name) => {
//     console.log(`Hi Mr. ${name}`);
// })("Bilal")