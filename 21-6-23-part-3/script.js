
// Task 1 Spot the errors and fix them

const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true




//SOLUTION

const userName = "Brad"; //added "" to make it a String
 // as userName is a constant it cannot be reassigned to Jenna
 // alternatively you can change const to let to reassign to Jenna

function getUserNameLength(userName) { // added the parameter userName to match variable name
    // added () so that it is clear that it is a function

  const result = name.length; // name.length to userName.length
  // removed return so that both values get assigned to each other
   return result; // removed the word const
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true






//Task 2

// TODO: Implement the isString function


console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true



//Solution

const isString = function(value) {   // parameter named value represents the input data in order to check if it is a string
    return typeof value === "string"; // using typeof operator in order to check if the value is a string
  };
  
console.log(isString("Hello"));
// true

console.log(isString(3));
// false

console.log(isString(undefined));
// false

console.log(isString(""));
//  true

console.log(isString("John" + "Doe"));
//  true






