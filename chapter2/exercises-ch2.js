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

const calls = 7;
let string = "";

for (let i = 1; i <= calls; i++) {
  string += "#"

  // console.log(string)
}

/*
FizzBuzz

Write all numbers  form 1 to 100
numbers divisilb by 3, print "Fuzz"
numbers divisilb by 5, print "Buzz"
numbers both divisilb by 3 & 5, print "FizzBuzz"
*/

let number = 100;

for (let i = 1; number >= i; i++) {
  console.log(i)
}