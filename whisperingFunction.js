/**
Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"
 */

//pseudo: 
// 1. condition: endsWith "!"
//    1.2. true: sarting with sh... and add sentence lowercase version and cut off "1"
//    1.3  false: sarting with sh... and add sentence lowercase version

function whisper(sentence){
    return sentence.endsWith('!') 
        ? "shh... " + sentence.toLowerCase().slice(0, -1) 
        : "shh... " + sentence.toLowerCase()
}

//test
console.log(whisper("PLEASE STOP SHOUTING."))
console.log(whisper("MA'AM, this is a Wendy's!"))