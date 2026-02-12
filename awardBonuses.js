/**
The company has 100 employees and their employee ID numbers range from 1 - 100. 
If the employee's ID number is: 
    Divisible by 3 - Vacation! 
    Divisible by 5 - $100,000 bonus! 
    Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
    Not divisible by 3 or 5 - :(
output: 
    1 - :(
    2 - :(
    3 - Vacation! 
    4 - :(
    5 - $100,000 bonus!
 */

/**pseudo
 * 1. loop through 1-100 
 * 2. switch (TRUE)
 *  2.1. case divisible by 3 and : console "JACKPOT! 1 Million and a Yacht!", break;
 *  2.2. case divisible by 5: console "$100,000 bonus!", break;
 *  2.3. case divisble by 3: console "Vacation!", break;
 *  2.4. default : console ":("
 */


function awardBonuses(){
    for(let i = 1; i <= 100; i++){
        switch(true){
            case (i % 3 === 0 && i % 5 === 0) : 
                console.log(`${i} - JACKPOT! 1 Million and a Yacht!`)
                break
            case (i % 3 === 0) : 
                console.log( `${i} - Vacation!`) 
                break
            case (i % 5 === 0) : 
                console.log(`${i} - $100,000 bonus!`)
                break
            default : console.log(`${i} - :(`) 
        }
    }
}


awardBonuses();