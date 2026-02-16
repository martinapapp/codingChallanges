/**
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).
 */

/**pseudo:
 * 1. save count empty obj
 * 2. edge case: if input length === 0, console: Please give your name for counting your letters
 * 3. store lowercase version and remove spaces
 * 4. loop through lowercasename 
 *   4.1. if key exists: add 1
 *   4.2. else: set value 1 
 * 5. return empty count
 */

function countChars(str){
    let count = {}
    if(str.length === 0){
        console.log("Please give your name for counting your letters")
        return
    } 
    const noCapsName = str.toLowerCase().replaceAll(" ", "")
    for (let letter of noCapsName) {
        if (count[letter]) {
            count[letter] += 1;
        }else {
            count[letter] = 1;
        }
    }
    return count
}

//test
console.log(countChars("Martina"))