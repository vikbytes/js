function range(start, end) {
    let array = []
    for(let x = start; x <= end; x = x + 1) {
        array.push(x);
    }
    return array;
}

function sum(start, end) {
    let sum = 0;
    for(let x = start; x <= end; x = x + 1) {
        sum = sum + x;
    }
    return sum;
}


console.log(range(1,10));
console.log(sum(1,10));