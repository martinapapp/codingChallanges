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

//db
const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}



//test
console.log(emojifyWord(":heart:"))
console.log(emojifyWord(":flower:"))
console.log(emojifyWord("elephant"))

console.log(emojifyPhrase("I :heart: my :cat:"))
console.log(emojifyPhrase("I :heart: my :elephant:"))