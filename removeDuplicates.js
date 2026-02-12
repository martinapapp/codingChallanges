/**
Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 

const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"

/**pseudo:
* 1. create empty space for password 
* 2. loop through chars
*      2.1. check if there isn't the same value in password
*           2.1.1. true: push it to the password
* 3. return password
*/

function removeDupeChars(chars){
    let pw = ""
    for(let char of chars){
        if(!pw.includes(char)) pw +=char 
    }
    return pw
}


 
//test
console.log(removeDupeChars(password))
