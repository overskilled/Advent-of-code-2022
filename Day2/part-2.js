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

function RockPaperScissors(arr){
    // when Z=win, Y=draw and X=lost
    for(i = 0; i < arr.length ; i++){
        //opponent play
        let opponent = arr[i][0];
        //The output determinant
        let decision   = arr[i][1];
        let player = "";
        //my play value
        let my_playvalue = compare["choice"][player];

        //win condition
        if(decision == "Z"){
            if(opponent == "A"){player = "Y"}
            if(opponent == "B"){player = "Z"}
            if(opponent == "C"){player = "X"}
            result += my_playvalue + compare["point"]["win"];
            console.log("Round "+i+" WIN");
        }
        //draw condition
        else if(decision == "Y"){
            result += compare["choice"][opponent] + compare["point"]["draw"];
            console.log("Round "+i+" DRAW");
        }
        //loss condition
        else{
            if(opponent == "A"){player = "Z"}
            if(opponent == "B"){player = "X"}
            if(opponent == "C"){player = "Y"}
            result += my_playvalue + compare["point"]["loss"]
            console.log("Round "+i+" LOSS");
        }
    }
    console.log(result);
}