function isAnagram(str1, str2) {
    if(str1.length !==str2.length) return false
    
    const anagram1 = {}
    const anagram2 = {}
    
    const str1Array = Array.from(str1)
    const str2Array = Array.from(str2)
    
    for(let i=0; i<str1Array.length; i++) {
        const key = str1Array[i]
        anagram1[key] = (anagram1[key] || 0) + 1
    }
    
    for(let i=0; i<str2Array.length; i++) {
        const key = str2Array[i]
        anagram2[key] = (anagram2[key] || 0) + 1
    }
    
    for(let key in anagram1) {
        if(!(key in anagram2)) return false
        if(anagram1[key] !== anagram2[key]) return false
    }
    
    return true
}

console.log(isAnagram('car', 'rat'))
console.log(isAnagram('cinema', 'iceman'))

//forEach()

function isAnagram(str1, str2) {
    if(str1.length !==str2.length) return false
    
    const anagram1 = {}
    const anagram2 = {}
    
    const str1Array = Array.from(str1)
    const str2Array = Array.from(str2)
    
    str1Array.forEach(char => anagram1[char] = (anagram1[char] || 0) + 1)
    str2Array.forEach(char => anagram2[char] = (anagram2[char] || 0) + 1)
    
    for(let key in anagram1) {
        if(!(key in anagram2)) return false
        if(anagram1[key] !== anagram2[key]) return false
    }
    
    return true
}

//console.log(isAnagram('car', 'rat'))
//console.log(isAnagram('cinema', 'iceman'))