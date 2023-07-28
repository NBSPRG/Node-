#!/usr/bin/env node

let inputArray = process.argv.slice(2);
console.log(inputArray);
const { dir } = require("console");

let helpObj = require("./help");
let treeObj = require("./tree")
let organizeObj = require("./organize");



// what we are going to study
// node main.js tree "directoryPath",
// node main.js organize "directoryPath",
// node main.js help

/// we are building these commands

let command = inputArray[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArray[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArray[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please input right path...");
        break;
}






