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
  
  console.log(string)
}