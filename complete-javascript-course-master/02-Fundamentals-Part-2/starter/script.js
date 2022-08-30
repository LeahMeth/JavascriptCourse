'use strict';

// ACTIVATING STRICT MODE
// let hasDriversLicense = false;
// const passedTest = true;

// if (passedTest) hasDriversLicense = true; // wrong variable name - without strict mode, won't get an error message.
// if (hasDriversLicense) console.log('I can drive!');

//const interface = 'Audio'; // error because interface is a reserved word - 'Unexpected strict mode reserved word'

// FUNCTIONS INTRO
/* function logger() {
    console.log('My name is Gobbeldy Gook');
}

// Below is called 'invoking'/'running'/'calling' the function
logger();
logger();

function fruitProcessor(numApples, numOranges) {
    const juice = `Juice with ${numApples} apples and ${numOranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice); */

// FUNCTION DECLARATIONS VS. EXPRESSIONS
// The below function is a function declaration because we use the 'function' keyword to define it, like declaring a variable.
/* function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1995);

// side-note: 'parameter' refers to the placeholder in the function, and 'argument' refers to the actual value that you pass in.

// below is a function expression. It's a function without a name, also called an anonymous function, that we then assign to a variable. An expression is a value, which is why we can store it into a variable.
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1995);
console.log(age1, age2); */

// One practical difference between a function declaration and a function expression, is that you can call a function declaration BEFORE defining the function. But you can't do that for an expression - you'll get an error "cannot access calcAge2 before initialization".

// ARROW FUNCTIONS
// An arrow function is essentially a function expression, but in shorthand
// A limitation of arrow functions is that they do not get a 'this' keyword
/* const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'fjdlfkjs')); */

// FUNCTIONS CALLING OTHER FUNCTIONS

/* function cutFruit(numFruit) {
    return numFruit * 4;
}

function fruitProcessor(numApples, numOranges) {
    const applePieces = cutFruit(numApples);
    const orangePieces = cutFruit(numOranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

// REVIEW FUNCTIONS
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

// ARRAYS
/* // Arrays is one example of a data structure
const friends = ['Joe', 'Shmoe', 'Moe'];
console.log(friends);

// Instead of the brackets, you can use the below. Brackets (called the 'literal syntax') is more common.
const friends2 = new Array('Joe', 'Shmoe', 'Moe');
console.log(friends2);

console.log(friends[0], friends[2]);
// can check how many elements are in the array with the length property
console.log(friends.length);
// get last element from the array:
console.log(friends[friends.length - 1]);

// Can mutate the data in the array even though was declared with 'const'. This is because only primitive types are immutable.
friends[2] = 'New';
console.log(friends);
// However, CANNOT re-assign the whole array itself. Below throws an error - "Uncaught TypeError: Assignment to constant variable."
//friends = ['Joe', 'Shmoe', 'Moe'];

// Can store different data types in the same array, as long as they are all expressions. Even a call to a function.
const firstName = 'dfadsf';
const aboutInfo = [firstName, 'lastname', 2022 - 1995, friends];
console.log(aboutInfo); */

// BASIC ARRAY OPERATIONS (METHODS)
/* // Arrays have built-in functions called Methods. The methods are called directly on the array object
const friends = ['Joe', 'Shmoe', 'Moe'];

// Adding Elements
friends.push('Boe', 'Zoe');
console.log(friends);

// push returns a value - the length of the newly-mutated element.
console.log(friends.push('Chloe'));
// unshift also adds elements - but to the BEGINNING of the array
friends.unshift('Aoe');
console.log(friends);

// Removing Elements
friends.pop(); // last
console.log(friends);
// pop returns the 'popped' element
const popped = friends.pop();
console.log(popped);

friends.shift(); // first
console.log(friends);

// Find where in the array an element is
console.log(friends.indexOf('Shmoe'));
console.log(friends.indexOf('dkfjdsalkf')); // returns -1 since not in the array
friends.push(23);
console.log(friends.indexOf('23')); // returns -1 since indexOf checks for strict equality
// Find if element is in the array
console.log(friends.includes('Shmoe')); // returns true
console.log(friends.includes('dkfjdsalkf')); // returns false
console.log(friends.includes('23')); // returns false since includes checks for strict equality */

// INTRODUCTION TO OBJECTS
// Objects are another form of data structure, like arrays.
// Objects allow for defining key-value pairs.
// The order of elements does not matter for Objects
/* const leah = {
    firstName: 'Leah',
    lastName: 'Meth',
    age: 2037 - 1995,
    array: ['qwerty', 'asdfgh', 'zxcvb']
}; */
// using curly braces is called the 'object literal' syntax

// DOT VS. BRACKET NOTATION
// Dot notation:
/* console.log(leah.firstName);
// Bracket notation:
console.log(leah['firstName']);
// The big difference between the two types of notation is that bracket notation can take any expression in the brackets.
const nameKey = 'Name';
console.log(leah['first' + nameKey]);
console.log(leah['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Leah? Choose firstName, lastName, age, or array');
console.log(leah.interestedIn); // if invalid prompt response, returns: undefined - which is what you get when you try to access a non-existant property of an object. undefined os a falsy value.

if (leah[interestedIn]) {
    console.log(leah[interestedIn]);
} else {
    console.log('Wrong request! Choose firstName, lastName, age, or array')
}

// Adding new properties to objects:
leah.location = 'Israel';
leah['info'] = 'more info';

 */

// OBJECT METHODS
// Arrays are a type of object. array.push, array.pop are therefore examples of object methods.
/* const leah = {
    firstName: 'Leah',
    lastName: 'Meth',
    birthYear: 1995,
    array: ['qwerty', 'asdfgh', 'zxcvb'],
    job: 'programmer',
    hasDriversLicense: true,
    // can put in a function expression. Any function attached to an object is called a 'Method'
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear;   // the 'this' keyword refers to the object calling the function, in this case, it refers to the leah object
    //     }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    // in the below function, it's better to call the calcAge function than to use the age property, in case calcAge was not called yet.
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license`;
        return this.summary;
    }

};

console.log(leah.calcAge());
console.log(leah.age);

console.log(leah.getSummary());
leah.hasDriversLicense = false;
leah.getSummary();
console.log(leah.summary); */

//
