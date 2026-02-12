

/**
Example input: !htrae ot emocleW
Example output: Welcome to earth!
 */

//db
const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/**pseudo
 * 1. store new reversed string
 * 2. loop through string from the end and go backwards
 *      2.1. adding values to the reversed string
 * 3. return reversed string
 */

function reverseString(str){
    let reveresedStr = ""
    for(let i = str.length-1; i >= 0; i--){
        reveresedStr += str[i]
    }

    return reveresedStr
}

function reverseStringsInArray(arr){
    const reversedArr = []
    arr.map(string => reversedArr.push(reverseString(string))).join("")
    return reversedArr
}

//test
console.log(reverseString(title));
console.log(reverseStringsInArray(messages));