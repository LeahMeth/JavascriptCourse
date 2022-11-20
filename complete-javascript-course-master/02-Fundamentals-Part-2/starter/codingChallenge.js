'use strict';

// CODING CHALLENGE #1
/* const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// Test Data 1:
const d1 = 85, d2 = 54, d3 = 41;
const k1 = 23, k2 = 34, k3 = 27;

const avgDolphins = calcAverage(d1, d2, d3);
const avgKoalas = calcAverage(k1, k2, k3);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins}, ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgKoalas}, ${avgDolphins})`;
    } else {
        return 'No one wins'
    }
}

console.log(`Dolphins average: ${avgDolphins}. Koalas average: ${avgKoalas}.`)
console.log(checkWinner(avgDolphins, avgKoalas)); */

// CODING CHALLENGE #2
/* function calcTip(bill) {
    return bill * (bill >= 50 && bill <= 300 ? .15 : .2);
}

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills)

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals); */

// CODING CHALLENGE #3
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi}).`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi}).`);
} else {
    console.log('Equal BMIs');
}
