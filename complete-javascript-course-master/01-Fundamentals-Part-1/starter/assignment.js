//VALUES AND VARIABLES
const country = 'Israel';
const continent = "Eurasia";
let population = 9.5;
/* 
console.log("The country is " + country);
console.log("Continent is " + continent);
console.log("The population is " + population + " million");  */

// DATA TYPES
const isIsland = false;


/* console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

// LET, CONST, VAR
const language = 'Hebrew';

// BASIC OPERATORS
const halfPopulation = population / 2;
//console.log("half population is " + halfPopulation);
//console.log("Increase population by 1 and go from " + population + " to " + ++population);
// INTERESTING NOTE: ++population in the above line will increase the population and then print the population. But population++ prints the original population and then increases it, to be seen only in the next time population is used.
//console.log(population--);
//console.log("Does " + country + " have a bigger population than Finland? ", population >= 6);
//console.log("Does " + country + " have a smaller population than the average of 33 million? ",
//    population < 33);

const description = `${country} is in ${continent} and its ${population} million people mostly speak ${language}.`;
//console.log(description);

// IF/ ELSE STATEMENTS
const avgPopulation = 33;
/* if (population > avgPopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${avgPopulation - population} million below average`);
} */

// EQUALITY OPERATORS: == VS. ===
//const numNeighbors = Number(prompt('How many neighboring countries does country have?'));

// if (numNeighbors === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// LOGICAL OPERATORS
/* if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
} */

// SWITCH STATEMENT
/* switch (language) {
    case 'Chinese':
    case 'Manderin':
        console.log('MOST number of native speakers');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('4th place');
        break;
    case 'Arabic':
        console.log('5th place');
        break;
    default:
        console.log('Great language too :D');
        break;
} */

// CONDITIONAL (TERNARY) OPERATOR
console.log(`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`);