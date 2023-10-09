function same(array1, array2) {
    if(array1.length !== array2.length) return false
    
    const counter1 = {}
    const counter2 = {}
    
    for(let i=0; i<array1.length; i++) {
        const num = array1[i]
        counter1[num] = (counter1[num] || 0) + 1
    }
    
     for(let i=0; i<array2.length; i++) {
        const num = array2[i]
        counter2[num] = (counter2[num] || 0) + 1
    }
    
    for(let key in counter1) {
        if(counter1[key] !== counter2[key*key]) return false
    }
    
    return true
}

console.log(same([1,2,3,2], [9,1,4,4]))

//forEach()

function same(array1, array2) {
    if(array1.length !== array2.length) return false
    
    const counter1 = {}
    const counter2 = {}
    
    array1.forEach(num => counter1[num] = (counter1[num] | 0) + 1)
    array2.forEach(num => counter2[num] = (counter2[num] || 0) + 1)
    
    for(let key in counter1) {
        if(counter1[key] !== counter2[key*key]) return false
    }
    
    return true
}