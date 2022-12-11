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

// let fruits = ["Banana", "Apple", "Strawberry"];

// console.log(fruits.fill("kiwi"));

// let vegetables = ["Cucumber", "Pepper", "Onion"];

// console.log(vegetables.fill("Carrot", 2, 3)); // "Onion" = "Carrot";

// let stars = Array(5).fill({});
// stars[0].name = "somename";
// stars[1].ages = 25;

// console.log(stars);

//-----------------------------------------------------------
//filter();
//Обикаля елементите от подадения масив и проверява дали отговартя на определено условие, подадено от ф-ция. Създава нов масив само от елементите, които отговарят на условието.

// let arr1 = [1, 2, 3, 4];

// function isOdd(num) {
//   if (num % 2 !== 0) {
//     return num;
//   }
// }

// console.log(arr1.filter(isOdd));

// let arr2 = [18, 23, 29, 35, 40, 17, 43, 36];

// function isOldEnough(age) {
//   if (age >= 18) {
//     return age;
//   }
// }

// console.log(arr2.filter(isOldEnough));

// let arr3 = ["Ivan", "Peter", "Hristian", "Nikolay"];

// function isLongEnough(word) {
//   if (word.length >= 5) {
//     return word;
//   }
// }

// console.log(arr3.filter(isLongEnough));

//-----------------------------------------------------------
//find();
//Връща 1-вия елемент от масива, който отговаря на определено условие, зададено от ф-ция. В момента, в който срещне елемент, който отговаря на условието - спира да обикаля останалите елементи от масива. Ако нито един елемент не отговаря на условието, връша  - "undefined".

// let arr1 = [20, 30, 40, 50, 100, 120, 140, 60];

// function isBigNumber(num) {
//   if (num > 100) {
//     return num;
//   }
// }

// console.log(arr1.find(isBigNumber)); //120

// let arr2 = [
//   { fruits: "apple", quantity: 5 },
//   { fruits: "banana", quantity: 10 },
//   { fruits: "cherries", quantity: 8 },
// ];

// function isBanana(fruit) {
//   if (fruit.fruits === "banana") {
//     return fruit;
//   }
// }
// console.log(arr2.find(isBanana));

// arr3 = [2, 4, 7];

// function isPrimeNumber(nums) {
//   if (nums > 1 && nums % nums === 0) {
//     return nums;
//   }
// }

// console.log(arr3.find(isPrimeNumber));

//-----------------------------------------------------------
//findIndex();
// //Връща първия елемент от масива, който отговаря на дадено условие, зададено от ф-ция. Като връща неговия индекс, а не стойност, т.е. на коя позиция се намира. Ако нито един елемент не отговаря на условието, връша "-1".

// let arr1 = [15, 18, 24, 26];

// function checkAge(age) {
//   if (age > 18) {
//     return age;
//   }
// }

// console.log(arr1.findIndex(checkAge));

// let arr2 = ["Mcdonalds", "KFC", "Subway"];

// function marketing(names) {
//   if (names === "Subway") {
//     return names;
//   }
// }

// console.log(arr2.findIndex(marketing));

// let arr3 = [{ name: "John" }, { name: "Smith" }, { name: "Jack" }];

// function firstName(somename) {
//   if (somename.name === "John") {
//     return somename;
//   }
// }

// console.log(arr3.findIndex(firstName));

//-----------------------------------------------------------
//indexOf();
//Връща индекса/позицията, на която се намира оказания от нас елемент. Той може да започне да търси зададената му стойност от определен индекс, ако му го зададем, ако не, ще започне да търси от началото до края на масива. Ако не намери елемент с определената стойност връща "-1";

// let arr1 = ["dog", "cat", "mouse"];

// console.log(arr1.indexOf("dog"));

// let arr2 = ["dogs", "cats", "dogs", "mouses"];

// console.log(arr2.indexOf("dogs", 1));

// let arr3 = ["elephant", "giraffe", "bison"];

// console.log(arr3.indexOf("dogs"));

//-----------------------------------------------------------
//forEach();
//Извиква ф-ция за всеки един елемент от масива.
let nums = [1, 2, 3, 4, 8];

let sum = 0;

nums.forEach((a) => {
  if (typeof a === "number") {
    sum += a;
  }
});

console.log(sum);

let names = ["John", "Smith", "Jack", "Johnat", 5, "Nataly", "Ferro"];

let result = "";

names.forEach((b) => {
  if (typeof b === "string") {
    result += " " + b;
  }
});

console.log(result);

let someNumbers = [1, 2, 3, 4, 5];
let oddResult = [];

someNumbers.forEach((currentNum) => {
  if (currentNum % 2 !== 0) {
    oddResult.push(currentNum);
  }
});
console.log(oddResult);
