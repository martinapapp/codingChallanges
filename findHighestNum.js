/**
Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
 */


const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}
/**
 * 1. store highest value
 * 2. store winner
 * 3. loop through obj values
 *  3.1. if current value is bigger than current highest value: update highest value and set winner
 * 4. return highest value and winner item
 */

function findTheWinner(obj){
    let highestVote = null
    let winner = ""
    
    for(let item in obj){
        if(obj[item] > highestVote){
            highestVote = obj[item]
            winner = item
        }
    }
    return `The winner is ${winner} with ${highestVote} votes!`
}

console.log(findTheWinner(gameNightFood));