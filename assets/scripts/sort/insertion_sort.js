
function insertionSort(arr) {

    for (let ia = 1; ia < arr.length; ia++) {

        for (let ib = 0; ib < ia; ib++) {
            if (arr[ia] < arr[ib]) [arr[ib], arr[ia]] = [arr[ia], arr[ib]];
        }
    }

    return arr;
}


console.log(insertionSort([1, 2, 9, 76, 4, -1]));






