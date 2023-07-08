//TASK 1

// TODO: Implement the removeItem function

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]




//SOLUTION

function removeItem(array, index) {
    
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== index) {
        newArray.push(array[i]);
      }
    }
    
    return newArray;
  }
  



//TASK 2

// TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55




  // SOLUTION

  function sumOfCharacters(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
      if (typeof array[index] === "string") {
        result += array[index].length;
      }
    }
    return result;
  }