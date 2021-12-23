

function sumZero(array) {

    const length = array.length;
    let index = 0
    let lastEleIndex = length - 1;

    while(index < (length / 2)) {
        if (array[index] + array[lastEleIndex] === 0) {
            return [array[index], array[lastEleIndex]];
        }
        index++;
        lastEleIndex--;
    }

    return false;

}


console.log(sumZero([4, -2, -1, 0, 1, 2, 3]));


