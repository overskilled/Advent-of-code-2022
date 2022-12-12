//Include the file system module
const {readFileSync, promises: fsPromises} = require('fs');

//get the input data from file
const contents = readFileSync("Day1/input.txt","utf-8");

//split after two new lines
let array = contents.split(/\r?\n\r\n/);

for(i = 0; i < array.length ; i++){
  //split each numeber
  array[i] = array[i].split("\r\n");

  //convert all input into integer
  array[i] = array[i].map(function(a) {
    return parseInt(a);
  })

  //add up all the elements of an array 
  array[i] = array[i].reduce(function(a, b) {
    return a + b;
  })
}

//find the highest value among all arrays
//sort the array in asc order
array.sort(function(a, b) {
    return a - b;
  })

//reverse the array
array.reverse();

//extracte the sum of the 3 highest values
let result = array[0] + array[1] +array[2];

console.log("The sum of the 3 elfes with the highest amount of calories is "+ result + " calories");
 