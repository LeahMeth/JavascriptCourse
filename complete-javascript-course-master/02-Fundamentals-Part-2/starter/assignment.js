'use strict'

/* function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const israel = describeCountry('Israel', 9, 'Yerushalayim');
const finland = describeCountry('Finland', 6, 'Helsinki');
const parksyland = describeCountry('Parksyland', 3, 'DeCapitol');
console.log(israel, finland, parksyland);

 */

// FUNCTION DECLARATIONS VS. EXPRESSIONS
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
/*
const israelPercentage1 = percentageOfWorld1(9);
const usaPercentage1 = percentageOfWorld1(330);
const chinaPercentage1 = percentageOfWorld1(1441);
console.log(israelPercentage1, usaPercentage1, chinaPercentage1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const israelPercentage2 = percentageOfWorld2(9);
const usaPercentage2 = percentageOfWorld2(330);
const chinaPercentage2 = percentageOfWorld2(1441);
console.log(israelPercentage2, usaPercentage2, chinaPercentage2);

// arrow function
const percentageOfWorld3 = population => population / 7900 * 100;

const israelPercentage3 = percentageOfWorld3(9);
const usaPercentage3 = percentageOfWorld3(330);
const chinaPercentage3 = percentageOfWorld3(1441);
console.log(israelPercentage3, usaPercentage3, chinaPercentage3); */

// FUNCTIONS CALLING OTHER FUNCTIONS
const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

/* console.log(describePopulation('israel', 9));
console.log(describePopulation('china', 1441));
console.log(describePopulation('usa', 330)); */

// INTRO TO ARRAYS
const populations = [9, 1441, 330, 90];

//console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
//console.log(percentages);

// BASIC ARRAY OPERATIONS (METHODS)
const neighbors = ['n1', 'n2', 'n3'];
/* console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) console.log('Probably not a central European country');

neighbors[neighbors.indexOf('n2')] = 'New Country Name';
console.log(neighbors); */

// INTRODUCTION TO OBJECTS
const myCountry = {
    country: 'Israel',
    capital: 'Yerushalayim',
    language: 'Hebrew',
    population: 9,
    neighbors: neighbors,
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length < 1;
        return this.isIsland;
    }
};

// DOT VS. BRACKET NOTATION
/* console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry.population); */

// OBJECT METHODS
myCountry.describe();
console.log(myCountry.checkIsland());