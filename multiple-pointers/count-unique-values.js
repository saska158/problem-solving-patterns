function countUniqueValues(array) {
    if(!array.length) return false
    
    let counter = []
    
    for(let i=0; i<array.length; i++) {
        if(array[i] !== array[i+1]) {
            counter.push(array[i])
        }
    }
    
    return counter.length
}

console.log(countUniqueValues([1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,5,5,5,6,6,7]))

// new Set()

function countUniqueValues(array) {
    if(!array.length) return false
    
    const uniqueValuesArr = [...new Set(array)]
    
    return uniqueValuesArr.length
}