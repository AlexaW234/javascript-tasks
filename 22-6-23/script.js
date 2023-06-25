// TASK 1 Spot the errors and fix them

const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10"; // since 25 > 10 , "Greater than 10 " gets assigned to the result and the else if condition never gets run
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Solution

const size = 25;
let result;

if (size > 20) {
  // changed the order so that "Greater than 20" gets returned
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// returns Greater than 20

// TASK 2 oddEven Function

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// Solution

function oddEven(value) {
  if (value % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// TASK 3 oldYoung function

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

// Solution

function oldYoung(years) {
  if (typeof years !== "number" || age < 0) {
    return "invalid parameter";
  }

  switch (true) {
    case years < 16:
      return "children";
    case years < 50:
      return "young person";
    default:
      return "elder person";
  }
}
