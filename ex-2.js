//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  let result = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 !== 0) {
      result.push("Fizz");
    } else if ((i + 1) % 5 == 0 && (i + 1) % 3 !== 0) {
      result.push("Buzz");
    } else if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      result.push("FizzBuzz");
    } else result.push(i + 1);
  }
  return result;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
