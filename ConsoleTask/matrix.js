function matrix(number) {
  for (let m = 1; m <= number; m++) {
    let result = "";
    for (let n = 1; n <= number; n++) {
      result += m + n - 1;
      console.log();
    }
    console.log(result);
  }
}

matrix(3);
