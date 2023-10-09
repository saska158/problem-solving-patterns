function averagePair(array, targetAverage) {
    let left = 0
    let right = array.length - 1
    
    while(left < right) {
        const average = (array[left] + array[right]) / 2
        if(average === targetAverage) {
            return true
        } else if(average < targetAverage) {
            left++
        } else {
            right--
        }
    }
    
    return false
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))