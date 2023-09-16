//          IF STATEMENT

// if (true) {
//     console.log("code will be executed");
// }

//      IF, ELSE AND MULTIPLE IFs
// amount = 500
// if (amount > 1000) {
//     console.log("greater than 1000");
// } else if (amount > 750) {
//     console.log("greater than 750");
// }else if (amount > 500) {
//     console.log("greater than 500");
// }else{
//     console.log("less than 500");
// }

//      single line if statement
// if (true) console.log("single line if");    // its scope is before ;

//  and ( executed only when all conditions are true) &&
let condition1 = true
let condition2 = true
let condition3 = false
// if (condition1 && condition2) {
//     console.log("executed");
// } else{
//     console.log("not executed");
// }

//  or ( executed  when any condition is true) ||
// if (condition1 || condition3) {
//     console.log("executed");
// } else {
//     console.log("else executed");
// }

//      switch key
// let month = 1
// switch (month) {
//     case 1:
//         console.log("january");
//         break;  //=> this break is used to stop the flow of program. when a case matches, all the code below it is executed (in this case: if case 1 matches and break is commented then, feb will also get printed)
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;

//     default:
//         console.log("a month");
//         break;
// }

//      Truthy( values thar are assumed to be true) / falcy( values thar are assumed to be false) values
//  falcy values: "", NaN, null, undefined, false, 0, -0, BigInt 0n. 
//  truthy values: "0", "false", " ", [], {}, function(){}  (empty function), and all values other than falcy values.

// userName = "" 
// userName = "ijohn23" 
// if (userName) {
//     console.log("got a user name!!");
// } else {
//     console.log("did not have a user name");
// }

//  checking empty array
// emptArray = []
// if (emptArray.length === 0) {
//     console.log("array is empty");
// }

//  checking an empty object
// emptObj = {}
// if (Object.keys(emptObj).length === 0) {
//     console.log("object is empty");
// }

//      The nullish coalescing (??) operator
// it is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let value;
// value = 5 ?? 10
// value = null ?? 10
// value = undefined ?? 10
// value = undefined ?? null   //=> returns null
// value = null ?? undefined      //=> returns undefined
// value = null ?? 10 ?? 65
// console.log(value);

//      the ternary operator
// syntax: condition ? true : false
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

// bookPrice = 500
// bookPrice <= 300 ? console.log("pocket friendly") : console.log("out of budget");