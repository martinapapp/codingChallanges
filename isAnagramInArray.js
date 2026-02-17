/**
Find anagrams in an array   

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]
*/

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]
/**pseudo
 * 1. get sorted phrases without white spaces
 */
//helper
function sortPhrase(phrase){
    return phrase.toLowerCase().split("").sort().join("").trim()
}
/**pseudo
 * 1. return loop array (.filter())
 *  1.1. use helper with anagram
 *  1.2. use helper with arr itms
 *  1.3. return which strictly equal
 */
function isAnagramInArray(anagram, arr){
    return arr.filter(item => {
        const sortedAngram = sortPhrase(anagram)
        const sortedArrItem = sortPhrase(item)
        return sortedAngram === sortedArrItem
    })
}

//test
console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams))