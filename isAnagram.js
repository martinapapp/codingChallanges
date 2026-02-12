/**
Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false
 */

//pseudo: frequency counter pattern

function isAnagram(str1, str2){
    
    if(str1.length !== str2.length){
        return false
    }
    
    let str1Counter = {}
    let str2Counter = {}
    
    for(const value of str1){
        str1Counter[value] = (str1Counter[value] || 0) + 1
    }
    for(const value of str2)
    str2Counter[value] = (str2Counter[value] || 0) + 1
    
    for(const key in str1Counter){
        if(!str2Counter[key]){
            return false
        }
        if(str1Counter[key] !== str2Counter[key]){
            return false
        }
    }
    return true
}


//test
console.log(isAnagram("allergy", "gallery"))
console.log(isAnagram("treasure", "measure"))