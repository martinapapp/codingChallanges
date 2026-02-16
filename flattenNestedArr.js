
/**
Write a function to flatten nested arrays of strings or
numbers into a single array.

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
 */


const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

/**
 * 1. init empty flat array
 * 2. loop through arr
 *  2.1. if it is a string push to flat array
 *  2.2. if it is an array, loop and push each item
 * 3. return flat array
 * (or return arr.flat())
 */
function flatten(arr){
    let flatArr = []
    for(let item of arr){
        if(Array.isArray(item)){
            item.forEach(str => flatArr.push(str))
        }else{
            flatArr.push(item)
        }
    }
    return flatArr
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
