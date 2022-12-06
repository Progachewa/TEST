// Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
// x1 + x2 + x3 = n
// Числото n е цяло число и се въвежда от конзолата.
// Estimated time: 30min; Start: 21:00; End: 21:15;

// function combination(input) {
//   let num = Number(input);

//   if (num > 0) {
//     for (let i = 0; i <= num; i++) {
//       let result = "";
//       for (let e = 0; e <= num; e++) {
//         for (let a = 0; a <= num; a++) {
//           result = i + e + a;
//           if (result === num) {
//             console.log(result);
//           }
//         }
//       }
//     }
//   }
// }
// combination(["5"]);

// Напишете функция, която проверява всички възможни комбинации от двойка числа в интервала от две дадени числа. На изхода се отпечатва, коя поред е първата комбинацията, чийто сбор от числата е равен на дадено магическо число. Ако няма нито една комбинация отговаряща на условието се отпечатва съобщение, че не е намерено.
// Вход
// Функцията получава масив от 3 елемента:
// •	Първи – начало на интервала – цяло число в интервала [1...999]
// •	Втори – край на интервала – цяло число в интервала [по-голямо от първото число...1000]
// •	Трети – магическото число – цяло число в интервала [1...10000]
// Изход
// На конзолата трябва да се отпечата един ред, според резултата:
// •	При първата намерена комбинация, чиито сбор на числата е равен на магическото число:
// o	"Combination N:{пореден номер} ({първото число} + {второ число} = {магическото число})"
// •	Ако не е намерена комбинация отговаряща на условието:
// o	"{броят на всички комбинации} combinations - neither equals {магическото число}"

// Estimated time: 60min; Start: 23:00; End: 00:30;

// function sumTwoNumbers(input) {
//   let firstNum = Number(input[0]);
//   let secondNum = Number(input[1]);
//   let magicNum = Number(input[2]);
//   let numberCombination = 0;
//   isFound = false;

//   for (let i = firstNum; i <= secondNum; i++) {
//     for (let e = firstNum; e <= secondNum; e++) {
//       numberCombination++;
//       if (i + e === magicNum) {
//         console.log(
//           `Combination N:${numberCombination} (${i} + ${e}) = ${magicNum}`
//         );
//         isFound = true;
//         break;
//       }
//     }
//     if (isFound) {
//       break;
//     }
//   }
//   if (!isFound) {
//     console.log(
//       `${numberCombination} combinations - neither equals ${magicNum}`
//     );
//   }
// }

// sumTwoNumbers(["88", "888", "2000"]);

// Ани обича да пътува и иска тази година да посети няколко различни дестинации. Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява. Когато е спестила достатъчно, ще може да пътува.
// Функцията получава масив, като всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването.
// След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава, като на конзолата трябва да се изпише:
//  "Going to {дестинацията}!"
// Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.

// Estimated time: 60-80min; Start: 10:00; End: 12:30;

// function travelling(input) {
//   let index = 0;
//   let destination = input[index];
//   index++;
//   let price = Number(input[index]);
//   index++;

//   while (destination !== "End") {
//     let allSavings = 0;
//     while (allSavings < price) {
//       let saving = Number(input[index]);
//       index++;
//       allSavings += saving;
//     }
//     console.log(`Going to ${destination}!`);
//     destination = input[index];
//     index++;
//     price = Number(input[index]);
//     index++;
//   }
// }

// travelling([
//   "Greece",
//   "1000",
//   "200",
//   "200",
//   "300",
//   "100",
//   "150",
//   "240",
//   "Spain",
//   "1200",
//   "300",
//   "500",
//   "193",
//   "423",
//   "End",
// ]);
