/**
Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
 */

/**
 * 1. save empty alterString
 * 2. loop through string length
 *      2.1. if current index can be divided with 2 
 *          2.1.1. add to alterString and make current letter uppercase
 *          2.1.2. else add to alterString as it is
 * 3. return alterString
 */

function altCaps(str){
    let alterString = ""
    for(let i=0; i<str.length; i++){
        if(i % 2 === 0){
            alterString += str[i].toUpperCase()
        }else{
            alterString += str[i]
        }
    }
    return alterString
}

//test
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"))