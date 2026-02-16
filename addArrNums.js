/**
Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

/**pseudo
 * return sumArr (.reduce())
 */

function sumArray(arr){
 return arr.reduce((total, current)=> {return total + current}, 0)
}

console.log(sumArray(studentCount));