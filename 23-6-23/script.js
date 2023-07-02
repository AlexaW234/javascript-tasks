// TASK 1 oddNumbers function

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddEven(9, 12));
// result should be: 9,11

// Solution

function oddNumbers(num1, num2) {
  let result = "";

  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      result += i + ",";
    }
  }

  return result;
}

// TASK 2 charCount function

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3

//Solution

function charCount(word, char) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }

  return count;
}
