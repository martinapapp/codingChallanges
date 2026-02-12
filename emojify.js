/**
Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
 */

//obj
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/**pseudo
 * 1. check if starts or ends with colon
 *    1.1. no: return word 
 *    1.2. yes: remove colons
 * 2. check if in obj
 *    2.1. yes: return emoji 
 *    2.2. no : return slice
 */

const emojifyWord = (word) =>{

    if(!word.startsWith(":") && !word.endsWith(":")) return word
    const slice = word.slice(1, -1);

    if(emojis[slice]){
         return emojis[slice]
    } else {
        return slice;
    } 

}

/**pseudo
 * 1. split phrase into words
 * 2. loop through newPhrase and use helper function
 * 3. return joined newPhrase
 */

function emojifyPhrase(phrase){
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    return newPhrase.join(" ")
}

//test
console.log(emojifyWord(":heart:"))
console.log(emojifyWord(":flower:"))
console.log(emojifyWord("elephant"))

console.log(emojifyPhrase("I :heart: my :cat:"))
console.log(emojifyPhrase("I :heart: my :elephant:"))