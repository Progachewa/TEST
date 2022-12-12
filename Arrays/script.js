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
// let nums = [1, 2, 3, 4, 8];

// let sum = 0;

// nums.forEach((a) => {
//   if (typeof a === "number") {
//     sum += a;
//   }
// });

// console.log(sum);

// let names = ["John", "Smith", "Jack", "Johnat", 5, "Nataly", "Ferro"];

// let result = "";

// names.forEach((b) => {
//   if (typeof b === "string") {
//     result += " " + b;
//   }
// });

// console.log(result);

// let someNumbers = [1, 2, 3, 4, 5];
// let oddResult = [];

// someNumbers.forEach((currentNum) => {
//   if (currentNum % 2 !== 0) {
//     oddResult.push(currentNum);
//   }
// });
// console.log(oddResult);

//-----------------------------------------------------------
//isArray();
//Проверява дали обектът е масив. И ако е да връща "true",а ако не връща "false";

// let arr1 = [15, 18, 30, 50];
// let check = Array.isArray(arr1);

// console.log(check);

// let arr2 = [
//   { fruit: "apple", price: 1.5 },
//   { fruit: "orange", price: 2.5 },
//   { fruit: "strawberry", price: 3.5 },
// ];

// let fruits = Array.isArray(arr2);

// console.log(fruits);

// let arr3 = { name: "Hristo", age: 45 };

// let checkName = Array.isArray(arr3);

// console.log(checkName);

//map();
//Създава нов масив, с ф-цията, която му е задена, за всеки един елемент от оригиналния масив.

// let arr1 = [2, 5, 3];
// let newArr1 = arr1.map(multyply);

// function multyply(a) {
//   return a * 2;
// }

// console.log(newArr1);

// let arr2 = [1, 2, 3];

// let newArr2 = arr2.map(plusOne);

// function plusOne(b) {
//   return b + 1;
// }

// console.log(newArr2);

// let arr3 = [4, 2, 5, 10];

// let newArr3 = arr3.map(square);

// function square(c) {
//   return Math.sqrt(c);
// }

// console.log(newArr3);

//-----------------------------------------------------------
//slice();
//Връща копие на оригиналния масив, като може да се зададат параметри от къде да започне да копира и до къде.

// let arr1 = ["Orange", "Apple", "Strawberry"];
// console.log(arr1.slice(1, 2)); // Apple;

// let arr2 = ["dogs", "cats", "mouses", "tigers"];
// console.log(arr2.slice(0)); // връща клониран целия масив;

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr3.slice(-3, -1)); // започва от 6 до 9 -> връща [7, 8];

//-----------------------------------------------------------
//splice();
//Променя контекста на зададения масив като премахва или заменя съществуващия елемент или добавя нор елемент към масива.

// let months = ["Jan", "Feb", "March"];
// months.splice(3, 0, "April");

// console.log(months);

// let days = ["Monday", "Wednesday", "Thursday", "Friday"];
// days.splice(1, 0, "Tuesday");

// console.log(days);

// let animals = ["dogs", "cats", "mouses", "sheeps", "cows"];
// animals.splice(3, 1, "pigs");

// console.log(animals);

//-----------------------------------------------------------
//sort();
//Сортира елементите на масива, ако е стринг, по азбучен ред, а ако са числа по големина, но гледа първото число.Т.е. ако имам 20 и 100 ще ми покаже първо 100 и после 20!

// let alphabet = ["A", "B", "D", "E", "F", "H", "C", "G"];

// console.log(alphabet.sort());

// let nums = ["1", "22", "20", "3", "100"];

// console.log(nums.sort());

// let simpleNums = ["2", "3", "4", "5", "6", "7", "8", "9"];
// simpleNums.sort();

// console.log(simpleNums.reverse());

//-----------------------------------------------------------
//shift();
//Премахва първия елемент от масива, но пази стойността му, т.е. дори и премахнат можем да го достъпим.

// let a = [1, 2, 3, 4, 5];
// let removeFirst = a.shift();

// console.log(a, removeFirst);

// let b = [10, 20, 30, 40];
// let result = 0;
// let rmv = b.shift();

// for (let i = 0; i < b.length; i++) {
//   result += b[i];
//   console.log(result);
// }
// rmv += result;
// console.log(rmv);

// let c = ["Orange", "Apple", "Banana"];
// let rmvFruit = c.shift();

// console.log(c);

//-----------------------------------------------------------
//pop();
//Премахва последния елемент от масива, но пази стойността му.

let ages = [25, 29, 34, 20, 18];
let rmvLast = ages.pop();
console.log(ages);

let animals = ["dog", "cat", "mouse"];
let rmvAnimal = animals.pop();
console.log(rmvAnimal);

let names = ["Hristo", "Ivan", "Maria"];
console.log(names.pop());
