// Original Solution
/*function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}*/

// Refactored Version
/*function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));*/




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*function naiveSearch(long, short) {

    let count = 0;

    [...long].forEach((longItem, index) => {

        for(let i = 0; i < short.length; i++) {

            if (short[i] !== long[index + i]) break;

            if (i === short.length - 1) count++;
        }
    })

    return count;

}

console.log(naiveSearch('lorie loled', 'lo'));*/





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Sort my string length

const str = ['ab', 'abc', 'a', 'dsadfsdad'];

const sortedStr = str.sort((a, b) => a.length - b.length);


console.log(sortedStr);





