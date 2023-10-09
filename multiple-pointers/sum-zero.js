function sumZero(array) {
    let left = 0
    let right = array.length - 1
    
    while(left < right) {
        const sum = array[left] + array[right]
        
        if(sum === 0) {
            return [array[left], array[right]]
        } else if(sum > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(sumZero([2,4,3,-1,9,-2]))