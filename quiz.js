// Quiz: Introduction to JavaScript Functions

// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 256

/* your code starts here */
function square(x){
  return x*x;
}
function cube(x){
  return x*x*x;
}
function quad(x){
  return x*x*x*x;
}
/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

/* your code starts here */
function sum(numbers, twiceOrHalf){
  if(twiceOrHalf ===undefined){
    var  num1 = 0;
    for (var i = 0; i < numbers.length; i++) {
      num1 +=numbers[i];
    };
    return num1;
  }
  else if(twiceOrHalf){
    var num2 = 0;
    for (var i = 0; i < numbers.length; i++) {
      num2 += numbers[i];
    };
    return num2 *2;
  }
  else{
    var num3 = 0;
    for (var i = 0; i < numbers.length; i++) {
      num3 +=numbers[i];
    };
    return num3 / 2;
  }
}
/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

/* your code starts here */
function max(args){
  if (args === undefined){
    return;
  }
  else{
    var largest = 0;
    for (var i = 0; i < args.length; i++) {
      if (args[i] > largest){
        largest = args[i];
      }
    }
    return largest;
  }
}
/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
