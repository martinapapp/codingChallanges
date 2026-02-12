/**
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/ 

function isPalindrome(str){

    const lowercaseStr = str.toLowerCase()
    let reversedStr = ""
    for(let i = lowercaseStr.length-1; i >= 0; i--){
        reversedStr += lowercaseStr[i]
    }
    
    return reversedStr === lowercaseStr
    
}

// test
console.log(isPalindrome("abbA"));
console.log(isPalindrome("Civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
