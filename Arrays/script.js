// concat();
// Конкатенира два или повече масива. Връща нов масив.

// let a = ["1", "2", "3"];
// let b = ["4", "5", "6"];

// console.log(a.concat(b));

// let names = ["Pollie", "Lara"];
// let nums = [2, 3, 5];

// console.log(names.concat(nums));

// let c = ["1", "2", "3", "4", "5"];
// let d = ["6", "7", "8", "9", "10"];
// let e = ["11", "12", "13", "14", "15"];

// console.log(c.concat(d, e[0]));

//-----------------------------------------------------------

// every();
//Обикаля всички елементи от масива и връща "true" или "false". Ако всеки един елемент отговаря на определеното условие( на функцията ) връща "true", но ако само един елемент се окаже "false" - връща цялото "false".

// let a = ["1", "2", "3"];

// function isNum(b) {
//   return typeof b === "number";
// }

// console.log(a.every(isNum)); // false

// let c = [1, 3, 5, 7];

// function isOdd(d) {
//   return d % 2 !== 0;
// }

// console.log(c.every(isOdd)); // true

// let arr = [10, 50, 100];

// function isBigger(element) {
//   return element >= 10;
// }

// console.log(arr.every(isBigger)); // true

//-----------------------------------------------------------
//fill();
// Пренаписва елемент/и от масива с определена стойност. Може да се подаде стартова позиция и финална.Ако не се подадат се пренаписват всички елементи с подадената стойност.

let fruits = ["Banana", "Apple", "Strawberry"];

console.log(fruits.fill("kiwi"));

let vegetables = ["Cucumber", "Pepper", "Onion"];

console.log(vegetables.fill("Carrot", 2, 3)); // "Onion" = "Carrot";

let stars = Array(5).fill({});
stars[0].name = "somename";
stars[1].ages = 25;

console.log(stars);
