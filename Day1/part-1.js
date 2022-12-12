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

//extracte the highest value
let result = array.pop();

console.log("The highest group carries "+result+" calories");



/*
// read file SYNCHRONOUSLY
function FormatData(filename) {
  const contents = readFileSync(filename, 'utf-8');
  let result;
  const arr = contents.split(/\r?\n\r\n/);
   for(i = 0; i<arr.length ; i++){
      arr[i] = arr[i].split("\r\n");
      arr[i] = arr[i].map(function(str) {
      return parseInt(str); });
      arr[i] = arr[i].reduce(function(a, b){
         return a + b;
       });
      
   }
   arr.sort(function(a, b){return a-b});
   arr.reverse();
   result = arr[0] + arr[1] + arr[2];
   console.log(result);

  return result;
}

FormatData('Day1/text.txt');
*/