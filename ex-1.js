//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  let result = s.toUpperCase().split("");
  let intValue = result.map((curr) => {
    if (curr === "I") {
      curr = 1;
    } else if (curr === "V") {
      curr = 5;
    } else if (curr === "X") {
      curr = 10;
    } else if (curr === "L") {
      curr = 50;
    } else if (curr === "C") {
      curr = 100;
    } else if (curr === "D") {
      curr = 500;
    } else if (curr === "M") {
      curr = 1000;
    }
    return curr;
  });
  console.log(intValue);
  const validated = intValue.map((curr, i, self) => {
    if (self[i] < self[i + 1]) {
      if (
        self[i + 1] - self[i] == 4 ||
        self[i + 1] - self[i] == 9 ||
        self[i + 1] - self[i] == 40 ||
        self[i + 1] - self[i] == 90 ||
        self[i + 1] - self[i] == 400 ||
        self[i + 1] - self[i] == 900
      ) {
        return curr;
      } else return "invalid";
    } else return curr;
  });
  if (!validated.includes("invalid")) {
    result = validated.reduce((acc, curr, i, self) => {
      console.log(self[i]);
      if (self[i] < self[i + 1]) {
        acc -= self[i];
      } else {
        acc += self[i];
      }
      console.log(acc);
      return acc;
    }, 0);
  } else return "wrong format";

  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
const result4 = romanToInt("iMCMX");
console.log(result4);
