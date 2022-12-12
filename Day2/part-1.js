// import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');
//Get the input data from file
const contents = readFileSync("Day2/input.txt", 'utf-8');

//variable to store the score
let result = 0;

// hash to store the values to be passed
let compare = {
    "choice" : {"X": 1, "Y": 2, "Z": 3},
    "point"  : {"loss": 0, "draw": 3, "won": 6}
}

//split the input data after new line
const arr = contents.split(/\r?\n/);
    for(i = 0; i < arr.length; i++){
        //split at space
        arr[i] = arr[i].split(" ");
    }

//function for game mechanism
function RockPaperScissors(arr){
    for(i = 0; i<arr.length;i++){
        //my play
        let player   = arr[i][1];
        //opponent play
        let opponent = arr[i][0];
        //my play value 
        let my_playvalue  = compare["choice"][player];

        //win conditions
        if(opponent == "C" && player == "X" || opponent == "A" && player == "Y" || opponent == "B" && player == "Z"){
            result += my_playvalue + compare["point"]["won"];
            console.log("Round "+i+" WON");
        }
        //draw conditions
        else if(opponent == "A" && player == "X" || opponent == "B" && player == "Y" || opponent == "C" && player == "Z"){
            result += my_playvalue + compare["point"]["draw"];
            console.log("Round "+i+" DRAW");
        }
        //else loose 
        else{
            result += my_playvalue + compare["point"]["loss"];
            console.log("Round "+i+" LOSS");
        }
    }
    console.log("For "+i+" Rounds, your total score is "+ result);
} 

RockPaperScissors(arr);

