/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  // what if arr is not an array?
  if (arr.constructor !== Array) return 'not an array';

  // create string
  let displayString = '... ';

  // loop through array and attach temp to string
  // get number of days from the index of the loop
  for (let i = 0; i < arr.length; i++) {
    // what if arr has some NaN values?
    if (typeof arr[i] !== 'number') continue;

    displayString += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  // return string
  if (displayString === '... ') return 'no temperatures in array';
  return displayString;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
console.log(printForecast('error!!'));
console.log(printForecast(['e', 'e']));
console.log(printForecast([]));
