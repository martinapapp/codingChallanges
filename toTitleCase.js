/**
Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"

Example Input: "scrimba"
Example Output: "Scrimba"
 */

/**pseudo: word
 * get the first letter from the word and make it uppercase and add to the rest of the word
 * 1. split into letters
 * 2. slice first and make it uppercase
 * 3. slice rest
 * 4. add new first and rest letters together
 * 5. return capWord
 */

function capitalizeWord(word){
    const splitWord = word.split("")
    const firstLetter = splitWord.slice(0,1)
    const restLetters = splitWord.slice(1)
    const wholeWordCap = firstLetter + restLetters
    return wholeWordCap
}

/**pseudo
 * 1. split into words
 * 2. new empty array
 * 3. loop through split sentence length
 *     3.1 capWord(current word) 
 *     3.2.and push to new array
 * 4. join back to sentence
 * 5. return titleCased sentence
 */
function toTitleCase(sentence){
    const splitSentence = sentence.split(" ")
    let newArray = []
    for(let i=0; i<splitSentence.length; i++){
        const capWord = capitalizeWord(splitSentence[i])
        newArray.push(capWord)
    }
    return newArray.join(" ")
}

//test
console.log(capitalizeWord("pumpkin"))
console.log(toTitleCase("pumpkin pranced purposefully across the pond"))