/*
this is a multi line comment
*/
// const id = 3.12
let name = "Bilal"
// console.table([id,name])
// console.log(typeof 3)


// console.log(3 +4 + "bilal" + 3 + 5); //=> agr left sy pehlay number milayga tou add kary ga aur agr string milayga tou concatenate karyga

// console.log("2" == 2);  //=> == convert data type and then check the given comparasion
// console.log("2" === 2);  //=> == do not convert data type and only checks the given comparasion

//There are two types of increment in JS: 1). Postfix inc (y = x++) [value x is first assigned to y and then incremented] 2). Prefix inc (y = ++x) [x is first incremented and then assigned to y]

const car = ["toyota", "honda", "bmw"] //=> this is an array (list)

// this is an object (dictionary):
let myObj = {
    name: "Bilal",
    age: 19,
    uni: "NED"
}

//this is how you declare a  function
const myFunc = function(){
    console.log("hello")
}
// myFunc()

// console.log(`hi my name is ${name}`);

// let num = new Number(101)
// console.log(num.toString())

// let myDate = new Date("01-14-2023")
// console.log(myDate.toLocaleString());

let newDate =new Date()    //=> gives current time in millisecond
// console.log(newDate);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000))        //=> gives time in second

// console.log(newDate.toLocaleString("default", {
//     weekday: "long/narrow/short"
// }))

//METHODS OF ARRAY
//pop() => removes last element, push() => add element in the last, unshift()   => add the given the element at start, shift()  => removes the first element of list, join("-")    => change the array into string separated by the argument specified


//SLICE VS SPLICE IN ARRAYS
//splice(start, deleteCount, item1, item2, /* …, */ itemN)  =>if del count is 0 or -ve num, nothing is deleted  
//slice(start, end)


let marvel = ["spiderman","thor","pokemon"]
let dc = ["superman","batman","greenman"]

// let concat_list = marvel.concat(dc)
// console.log(concat_list);   //=> con only concatenate two arrays together

// marvel.push(dc);
// console.log(marvel);    //=> add DC as a single element in marvel list

//let spread_list = [...marvel, ...dc]
//console.log(spread_list);   //=> it first decompose marvel and dc and then make a new list (concatenated version). This is better than .concat() cuz multiple elements can be added at the same Time.


//console.log(Array.isArray(newDate));    //=> checks if the given argument is an array

// console.log(Array.from("bilal"));   //=> convert the given argument into an array

// let ar1 = [1,2,[3,4],5,[6,[7,8,9]]]
// console.log(ar1.flat(Infinity/1/2));    //=> .flat converts nested arrays into a single array. it's arguments defines the depth of nested arrays to be opened

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));  //=> Returns a new array from a set of elements.

//LITERAL OBJECT:
const mySym = Symbol("key1")
const JsUser = {
    name: "Bilal",
    [mySym]: "mykey1",  //=> this is how a symbol is added in an object
    age: 19,
    city: "Karachi"
}
//console.log(JsUser.age);    //=> 88 & 89 both are correct ways to get value of key
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);
JsUser.name = "Imran"
// Object.freeze(JsUser)   //=> it freezes the object and no changes are entertained in this object after this line

JsUser.greeting = function(){
    console.log(`hello JS user, ${this.name}`); //=> this refers to the Jsuser in this case or any obj pointed iut before
}
// console.log(JsUser.greeting());


//SINGLETON OBJECT
// const newUser = new Object() //this is how a singleton object is declared. There is no other difference between singleton and literal object except of being singleton. Both are objects.
// newUser.id = "1250"
// newUser.name = {        //this is how objects are nested
//     firstName: "liam",
//     lastName: "john",
//     DOB: {
//         day: 30,
//         month: 11,
//         year: 2003
//     }
// }
// newUser.isLoggedIn = false
// console.log(newUser.name.DOB);


//  COMBINING TWO OBJECTS IN A SINGLE OBJECT
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
// const megaObj = Object.assign({}, obj1, obj2, obj3)     //first perameter ia target (optional but better to specify). check mdn for further details
// const obj4 = {...obj1, ...obj2}     //=> it is more convinent to use
// console.log(obj4);


//      ACCESSING KEY AND VALUES    
user = {
    id: 5,
    name: "Bilal",
    isLoggedIn: true
}
// console.log(Object.keys(user))      //returns an array of keys
// console.log(Object.values(user))    //returns an array of values 
// console.log(Object.entries(user))   //returns an array of key value pair enclosed in an array

// console.log(user.hasOwnProperty("name"));   //checks if the object has the given key. returns boolean


//  if you want to use value of a certain key then use this syntax: const {Objectkey: nickName(optional)} = objectName  => now console log it with obj's key or nick name
// const {isLoggedIn: login} = user
// console.log(login);


//*************************************************       FUNCTIONS       ************************************

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