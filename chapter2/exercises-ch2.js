/*
Exercises:
- Looping a triangle
- FizzBuzz
*/

/* Write a loop that makes seven calls to console.log to output the following triangle

#
##
###
####
#####
######
#######

*/

console.log("------ Triangle ------\n")

const calls = 7;
let string = "";

for (let i = 1; i <= calls; i++) {
  string += "#"

  console.log(string)
}

console.log("\n")
console.log("--- End of exercise ---\n")
console.log("------ FizzBuzz ------\n")

/*
FizzBuzz

Write all numbers from 1 to 100
numbers divisible by 3, print "Fuzz"
numbers divisible by 5, print "Buzz"
numbers both divisilb by 3 & 5, print "FizzBuzz"
*/

let number = 100;
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;


for (let i = 1; i <= number; i++) {
  
  if (i % 15 == 0) {
    // least common multiple (LCM), 15
    console.log(FIZZBUZZ)
  } else if (i % 3 == 0) {
    console.log(FIZZ)
  } else if (i % 5 == 0) {
    console.log(BUZZ)
  }
  else {
    console.log(i)
  }
}

console.log("\n")
console.log("------ End of buzz ------\n")
console.log("------ Chessboard ------\n")
// Chess

let chessBoard = ""
const boardSize = 16;

for (let row = 0; row < boardSize; row++) {
  for (let col = 0; col < boardSize; col++) {
    if ((row + col) % 2 === 0) {
      chessBoard += " ";
    } else {
      chessBoard += "#";
    }
  }
  chessBoard += "\n"
}

console.log(chessBoard)