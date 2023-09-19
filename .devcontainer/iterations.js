//      FOR LOOP
// for (let i = 0; i < 5; i++) {
//     console.log(i);
    
// }

//      BREAK
// for (let num = 1; num < 10; num++) {
//     if (num == 6) {
//         console.log("detected 6");
//         break
//     }
//     console.log(num);
// }

//     Continue
// for (let num = 1; num < 10; num++) {
//     if (num == 6) {
//         console.log("detected 6");
//         continue
//     }
//     console.log(num);
// }

//      WHILE LOOP

// let index = 1
// while (index < 6) {
//     console.log(index);
//     index ++
// }

//  DO WHILE    => first performs the operation and then check the condition
let score = 1
// let score = 6
// do {
//     console.log(`score is: ${score}`);
//     score ++
// } while (score <= 5);

//  HIGH ORDER ARRAY LOOPS

//  for of
GREETING = "HELLO WORLD!"
for (const greet of GREETING) {
    // console.log(`each character: ${greet}`);
}

value = [1, 2, 3, 4, 5]
for (const val of value) {
    // console.log(`num: ${val}`);
}

//      MAPS =>The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
// 
// The key difference is that Objects only support string and Symbol keys where as Maps support more or less any key type.

// If I do obj[123] = true and then Object.keys(obj) then I will get ["123"] rather than [123]. A Map would preserve the type of the key and return [123] which is great. 

const map = new Map();
map.set("Pk", "pakistan")
map.set("afg", "afghanistan")
map.set("uk", "england")
map.set(123, true)
// console.log(map);

//  returns array 
// for (const key of map) {
//     console.log(key);
// }

//  returns in simple format
// for (const [key, value] of map) {
//     console.log(key,": ", value);
// }

// for of loops cannot iterate objects. for objects we use for in loops

//      FOR IN

const myObj = {
    js: "javascript",
    py: "python",
    css: "cascading style sheet"
}
for (const key in myObj) {
    // console.log(key);   // => prints keys 
    // console.log(myObj[key]);   // => prints value 
    // console.log(`${key} : ${myObj[key]}`);   // => prints key value pair 
}

//if for in loop in applied on an array, it will return keys(index number)
cars = ["civic", "city","carolla", "mira"]
for (const key in cars) {
    // console.log(key);   // => prints keys(indices)
    // console.log(cars[key]);   // => prints array's elements
}

//  map cannot be iterated by for in loop cuz they are not iterable

//  ForEach
cars = ["civic", "city","carolla", "mira"]
// cars.forEach( function (item){
//     console.log(item);
// })

// 2nd syntax
// cars.forEach(i => {
//     console.log(i);
// });

//  when function is defined before:
// function executed(item) {
//     console.log(`${item} executed`);
// }
// cars.forEach(executed);

                // item/index/full array
// cars.forEach( (item,index,arr)=>{
//     console.log(item, index, arr);
// });


// const codinglan =[
//     {
//         lang: "python",
//         ext: "py"
//     },
//     {
//         lang: "javascript",
//         ext: "js"
//     },
//     {
//         lang: "java",
//         ext: "java"
//     }
// ]
// codinglan.forEach( (item)=>{
//     console.log(item.ext);
// })

//  for each always return undefined. it cannot return any value

//  filter => it can return values unline forEach
digits = [1, 2, 3, 4, 5, 6, 7]
// let newDig = digits.filter( (item) => (item>5))  //=> no need to use return when parenthesis is used
// let newDig = digits.filter( (item) => {
//     return item <5
// })
// console.log(newDig);


//  map: it can also return values unlike foeEach

// let twice = digits.map( (item) => item*2)
// console.log(twice);


//  CHAINING: using multiple methods in a consecutive manner
//  execution of chain is started from left. there is no limit of methods in chaining
// let digi = digits.map(  (num) =>num+1 ).map(   (num) => num *10 ).filter(  (num) => num >= 50)
// console.log(digi);

//  reduce
// in the first iteration, acc == initial value and in the remaining iterations, acc = acc + currval (in this case)
// const myTotal = digits.reduce(  function (acc, currval){
//     console.log(`accumulator: ${acc} current value: ${currval}`);
//     return acc + currval
// },0)    // 0 is the initial value here

// let myTotal = digits.reduce(  (acc, curval) => acc + curval, 0)
// console.log(myTotal);    //with arrow function syntax