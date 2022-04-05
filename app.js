// Example-07: JavaScript Program to Convert Kilometers to Miles
function KilometerToMile(kilometer) {
  const mile = kilometer * 0.621371;
  return mile;
}
const result = KilometerToMile(30);
console.log(`${result} miles`);

// Example-08: Javascript Program to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
const fahrenheit1 = celsiusToFahrenheit(25);
console.log(`${fahrenheit1} degree fahrenheit`);

// Example-09: Javascript Program to Generate a Random Number
const randomNumber = Math.random();
console.log(randomNumber);

// generating a random number between 1 to 50
const randomNumber2 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
console.log(randomNumber2);

// Example-10: Javascript Program to Check if a number is Positive, Negative, or Zero\
function checkNumber(number) {
  if (number > 0) {
    console.log("The number is positive");
  } else if ((number = 0)) {
    console.log("The number is zero");
  } else {
    console.log("The number is negative");
  }
}
const input = checkNumber(-3);
console.log(input);
