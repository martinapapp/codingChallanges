/**
Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
 */

//pseudo: 1. split into words 2. join back separeted with emoji 3. make it uppercase 4. add "!" to the end

function panic(str){
   return str
            .split(" ")
            .join(' 😱 ')
            .toUpperCase()
            +'!'
    
}

// Test
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))