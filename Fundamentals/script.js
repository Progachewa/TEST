// Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
// x1 + x2 + x3 = n
// Числото n е цяло число и се въвежда от конзолата.
// Estimated time: 30min; Start: 21:00; End: 21:15;

function combination(input) {
  let num = Number(input);

  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      let result = "";
      for (let e = 0; e <= num; e++) {
        for (let a = 0; a <= num; a++) {
          result = i + e + a;
          if (result === num) {
            console.log(result);
          }
        }
      }
    }
  }
}
combination(["5"]);
