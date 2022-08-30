/*
let js = 'amazing';

let firstName = "fdssdaf";
console.log(firstName);

let job = "fdsf";
*/

/* let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 234);
// console.log(typeof 'rtyui');

javascriptIsFun = 'yes';
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2112;
console.log(typeof year);

console.log(typeof null); */

/* let age = 23;
age = 24;

const birthYear;
 */

/////////////////////////////////////////////////
// Math Operators
/* const currentYear = 2022;
const ageBob = currentYear - 1995;
const ageShmoe = currentYear - 2001;
console.log(ageBob, ageShmoe);

console.log(ageShmoe * 2, ageShmoe / 0, 2 ** 4);

const firstName = 'First';
const lastName = 'Last';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 6;
x += 9;
x--;
console.log(x);

// Comparison Operators
console.log(ageBob < ageShmoe); // <, >, <=, >= */

//////////////////////////////////////////////////////////////////////////////////////
//    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//////////////////////////////////////////////////////////////////////////////////////

// STRINGS AND TEMPLATE LITERALS
/* const firstName = 'Leah';
const job = 'programmer';
const birthYear = 1995;
const currentYear = 2040;

const leah = "I'm " + firstName + ', a ' + job + ' and ' + (currentYear - birthYear) + ' years old.';
console.log(leah);

const newLeah = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(newLeah);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
 */

// IF/ ELSE STATEMENTS
/* const age = 15;

// This structure is called an "if-else control structure"
if (age >= 18) {
    console.log('You are old enough to start learning to drive 🚙');
} else {
    console.log(`You have ${18 - age} more years to wait.`)
}

const birthYear = 1995;
let century;

if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); */

// TYPE CONVERSION AND COERCION

// type conversion = converting manually
/* const inputYear = '1995';
console.log(Number(inputYear), inputYear);

console.log(Number('NotANumber'));
console.log(typeof (NaN));
console.log(String(23), 23);

// type coersion = Javascript does it automatically
console.log('I am ' + 25 + ' plus years old.');  // with the '+' operator, JS converts numbers to a strings
console.log('25' - '10' - 2); // with the '-', '*', and '/' operators, JS converts strings to numbers
console.log('24' * 2, '24' / 2);

let n = '1' + 1;  // = '11'
n = n - 1;        // = 10
console.log(n);

 */

// TRUTHY AND FALSY VALUES
// falsy = will become false when converted to a bool. 5 values that are falsy are: 0, '', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('dksjalk'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job');
}

// if not a falsy value, it will be truthy
const money2 = 100;
if (money2) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job');
}
console.log(money2, typeof (money2));

let height;
if (height) {
    console.log('height is defined');
} else {
    console.log('height is UNDEFINED');
} */

// EQUALITY OPERATORS: == VS. ===
/* const age = '18'
// === checks exactly. This is called the Strict Equality Operator - it does not perform type coercion
if (age === 18) console.log('You just became an adult (strict)'); // does not print

// == does type coercion. This is called the Loose Equality Operator
if (age == 18) console.log('You just became an adult (loose)'); // does print */

/* const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);   // prints: string
if (favorite == 23) {   // '23' == 23
    console.log("23 is a great number!");
} */

// But it's better to use ===, and convert as needed
/* const favorite2 = Number(prompt("What's your favorite number?"));   // can wrap prompt with Number function
console.log(favorite2);
console.log(typeof favorite2);   // prints: number
if (favorite2 === 23) {
    console.log("23 is a great number!");
} else if (favorite2 === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

// Different operator
// != is loose and !== is strict, which is better to user
if (favorite2 !== 23) console.log('why not 23?') */


// BOOLEAN LOGIC AND LOGICAL OPERATORS
/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);    // true
console.log(hasDriversLicense || hasGoodVision);    // true
console.log(!hasDriversLicense);    // false


const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('You can drive');
} else {
    console.log('Someone else should drive');
}

 */

// THE SWITCH STATEMENT - does strict evaluation
const day = 'Saturday';

/* switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('blah blah');
        break; // if forget the break statement, then will continue executing until hits the next break. So if leave out this break, will also execute tuesday's lines
    case 'Tuesday':
        console.log('tuesday plans');
        break;
    case 'Wednesday':
    case 'Thursday':    // if follow one case statement by another, then it's for both
        console.log('Wednesday AND Thursday plans');
        break;
    case 'Friday':
        console.log('Friday plans');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

// translate above switch statement into an if-else block
if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('blah blah');
} else if (day === 'Tuesday') {
    console.log('tuesday plans');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Wednesday AND Thursday plans');
} else if (day === 'Friday') {
    console.log('Friday plans');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
} */

// STATEMENTS AND EXPRESSIONS
// Expressions are a piece of code that produces a value. For example : 3 + 4 or 1991 or true && false && !false
// also variables are an expression because they produce a value
// Statements are a bigger peice of code that does not produce a value on its own. For example the following does actions, but does not produce a value. If-Else is a statement, Switch is a statement
// if (23 > 10) {
//     const str = '23 is bigger'; // this string itself is an expression
// }

// The distinction btwn statements and expressions is important because JS expects expressions in some places and statements in others.
// For example, a template literal expects an expression
// console.log(`I'm ${2022 - 1995} years old.`);
// the below with throw an error : Uncaught SyntaxError: Unexpected token 'if'
// console.log(`I'm ${2022 - 1995} years old. ${if (23 > 10) {
//     const str = '23 is bigger';
// }}`);


// THE CONDITIONAL (TERNARY) OPERATOR
const age = 25;
age >= 18 ? console.log('Can drink wine') : console.log('Cannot drink wine');
const drink = age >= 18 ? 'wine' : 'water';
// The conditional operator produces a value, like other operators. Therefore, it is an expression. THUS - it can be used in a template literal
console.log(`I can drink ${age >= 18 ? 'wine' : 'soda'}`);